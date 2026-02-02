import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
import { 
  initializeAppCheck, 
  ReCaptchaV3Provider, 
  getToken,
  AppCheck 
} from 'firebase/app-check';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const analytics = typeof window !== 'undefined' ? getAnalytics(app) : undefined;
let appCheck: AppCheck | undefined;

export const initFirebaseAppCheck = () => {
  if (typeof window !== 'undefined' && !appCheck) {
    console.log("Initializing App Check...");

    const provider = new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!);
    
    // Enable debug token in localhost
    if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = process.env.NEXT_PUBLIC_APP_CHECK_DEBUG_TOKEN || true;
    }

    appCheck = initializeAppCheck(app, {
      provider,
      isTokenAutoRefreshEnabled: true
    });
  }
};

export const getAppCheckToken = async (): Promise<string | null> => {
  if (!appCheck) {
    initFirebaseAppCheck();
  }
  
  if (!appCheck) return null;
  
  try {
    const result = await getToken(appCheck, false);
    return result.token;
  } catch (error) {
    console.error("App Check Token Error:", error);
    return null;
  }
};

export { app, auth, db, storage, analytics };