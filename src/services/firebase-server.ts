import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getAuth as getAdminAuth, DecodedIdToken } from 'firebase-admin/auth';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';
import { getStorage as getAdminStorage } from 'firebase-admin/storage';
import { getMessaging as getAdminMessaging } from 'firebase-admin/messaging';
import { getAppCheck } from 'firebase-admin/app-check';

if (!process.env.FIREBASE_SERVICE_ACC_CONFIG) {
	throw new Error('Internal Error: FIREBASE_SERVICE_ACC_CONFIG missing.');
}

if (!process.env.FIREBASE_STORAGE_BUCKET) {
	throw new Error('Internal Error: FIREBASE_STORAGE_BUCKET missing.');
}

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACC_CONFIG);

// Store the app instance
let app: App | null = null;
let isInitialized = false;
let initializationError: Error | null = null;

// Initialize Firebase Admin SDK
function initializeFirebase(): App {
	if (isInitialized && app) {
		return app;
	}

	if (initializationError) {
		throw initializationError;
	}

	try {
		// Check if an app already exists (useful for hot-reloading in development)
		const apps = getApps();
		if (apps.length > 0) {
			app = apps[0];
			isInitialized = true;
			console.log('Firebase admin already initialized, reusing existing app.');
			return app;
		}

		// Initialize new app
		app = initializeApp({
			credential: cert(serviceAccount),
			storageBucket: process.env.FIREBASE_STORAGE_BUCKET
		});
		
		isInitialized = true;
		console.log('Firebase admin initialized successfully.');
		return app;
	} catch (error) {
		initializationError = error as Error;
		console.error('Firebase admin initialization error:', error);
		throw error;
	}
}

// Lazy initialization getters
export function getApp(): App {
	if (!app || !isInitialized) {
		return initializeFirebase();
	}
	return app;
}

export function getFirestore() {
	return getAdminFirestore(getApp());
}

export function getStorage() {
	return getAdminStorage(getApp());
}

export function getStorageBucket() {
	return getStorage().bucket(process.env.FIREBASE_STORAGE_BUCKET);
}

export function getAuth() {
	return getAdminAuth(getApp());
}

export function getMessaging() {
	return getAdminMessaging(getApp());
}

// App Check verification utility
export async function verifyAppCheckToken(token: string): Promise<boolean> {
	if (!token) return false;
	
	try {
		const appCheckClaims = await getAppCheck(getApp()).verifyToken(token);
		return !!appCheckClaims;
	} catch (error) {
		console.error('App Check verification failed:', error);
		return false;
	}
}

// Helper to extract and verify both Auth and App Check tokens from request
export async function verifyRequestTokens(request: Request): Promise<{
	authToken: DecodedIdToken | null;
	appCheckValid: boolean;
	error?: string;
}> {
	const authHeader = request.headers.get('authorization');
	const appCheckHeader = request.headers.get('X-Firebase-AppCheck');
	
	let authToken: DecodedIdToken | null = null;
	let appCheckValid = false;
	
	// Verify Firebase Auth token
	if (authHeader && authHeader.startsWith('Bearer ')) {
		try {
			const token = authHeader.split(' ')[1];
			authToken = await getAuth().verifyIdToken(token);
		} catch (e) {
			console.error('Invalid auth token:', e);
			return { authToken: null, appCheckValid: false, error: 'Invalid auth token' };
		}
	}
	
	// Verify App Check token  
	if (appCheckHeader) {
		appCheckValid = await verifyAppCheckToken(appCheckHeader);
	}
	
	return { authToken, appCheckValid };
}

// Optional: Helper function to check if Firebase is initialized
export function isFirebaseInitialized(): boolean {
	return isInitialized && app !== null;
}

// Optional: Force initialization (useful for app startup)
export async function ensureFirebaseInitialized(): Promise<void> {
	try {
		initializeFirebase();
	} catch (error) {
		console.error('Failed to initialize Firebase:', error);
		throw error;
	}
}

// Export types for use in other files
export type { App } from 'firebase-admin/app';