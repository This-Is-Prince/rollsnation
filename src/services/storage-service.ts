/* eslint-disable @typescript-eslint/no-explicit-any */
import { initFirebaseAppCheck, storage, auth } from './firebase-client';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const generateFileHash = async (file: File): Promise<string> => {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

/**
 * Upload event image to Firebase Storage
 * Path: rollsnation/{hash}.{ext}
 * Access: Public read, authenticated write
 */
export const uploadImage = async (file: File): Promise<string> => {  
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error('User must be authenticated to upload images');
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Image must be less than 5MB');
  }

  if (!file.type.startsWith('image/')) {
    throw new Error('File must be an image');
  }

  const fileHash = await generateFileHash(file);
  const fileExtension = file.name.split('.').pop();
  
  const filename = `${fileHash}.${fileExtension}`;
  const storageRef = ref(storage, `rollsnation/${filename}`);

  try {
    const existingURL = await getDownloadURL(storageRef);
    console.log('Duplicate image detected, returning existing URL');
    return existingURL;
  } catch (error: any) {
    if (error.code === 'storage/object-not-found') {
      const snapshot = await uploadBytes(storageRef, file);
      return await getDownloadURL(snapshot.ref);
    }
    
    throw error;
  }
};

/**
 * Upload multiple images
 */
export const uploadMultipleImages = async (files: File[]): Promise<string[]> => {
  initFirebaseAppCheck();
  const uploadPromises = files.map(file => uploadImage(file));
  return Promise.all(uploadPromises);
};

/**
 * Upload profile photo to Firebase Storage
 * Path: profile_photos/{userId}/{hash}.{ext}
 * Access: Authenticated read only, user can only write to their own folder
 */
export const uploadProfilePhoto = async (file: File): Promise<string> => {
  initFirebaseAppCheck();
  
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error('User must be authenticated to upload profile photo');
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Profile photo must be less than 5MB');
  }

  if (!file.type.startsWith('image/')) {
    throw new Error('File must be an image');
  }

  const fileHash = await generateFileHash(file);
  const fileExtension = file.name.split('.').pop();
  
  const filename = `profile_photos/${currentUser.uid}/${fileHash}.${fileExtension}`;
  const storageRef = ref(storage, filename);

  try {
    const existingURL = await getDownloadURL(storageRef);
    console.log('Duplicate profile photo detected, returning existing URL');
    return existingURL;
  } catch (error: any) {
    if (error.code === 'storage/object-not-found') {
      const snapshot = await uploadBytes(storageRef, file);
      return await getDownloadURL(snapshot.ref);
    }
    
    throw error;
  }
};
