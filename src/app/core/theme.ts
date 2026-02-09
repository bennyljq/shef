import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  
  // The Source of Truth
  theme = signal<Theme>('light');

  constructor() {
    // Only access localStorage in the browser
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('shef-theme') as Theme;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      this.theme.set(saved || (prefersDark ? 'dark' : 'light'));
    }

    // Effect: Syncs the signal with the DOM and LocalStorage
    effect(() => {
      const currentTheme = this.theme();
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('shef-theme', currentTheme);
      }
    });
  }

  toggle() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
  }
}