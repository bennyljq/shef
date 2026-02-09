import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

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
    provideClientHydration(withEventReplay())
  ]
};