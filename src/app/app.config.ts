import { ApplicationConfig, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. ZONELESS (Stable API): 
    provideZonelessChangeDetection(),

    // 2. ROUTING:
    provideRouter(
      routes,
      withViewTransitions(), 
      withComponentInputBinding()
    ),

    // 3. HYDRATION:
    provideClientHydration(withEventReplay()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
};