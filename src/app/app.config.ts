import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';

const firebaseConfig = {
  apiKey: 'AIzaSyDpRVC3qZ6RUMTqru_Wx3QtLsHfiHBQQ-E',
  authDomain: 'read-cycle-2692d.firebaseapp.com',
  projectId: 'read-cycle-2692d',
  storageBucket: 'read-cycle-2692d.appspot.com',
  messagingSenderId: '74354895481',
  appId: '1:74354895481:web:ab99d045266b2dfd0d42a8',
  measurementId: 'G-9YS441YT4T',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), //firebase  application
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
