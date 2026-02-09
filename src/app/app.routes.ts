import { Routes } from '@angular/router';

export const routes: Routes = [
  // Update the routes array
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
    title: 'Shef - Home'
  },
  {
    path: 'profile-selection', // New Route
    loadComponent: () => import('./features/profile-selection/profile-selection').then(m => m.ProfileSelection),
    title: 'Select Chef'
  },
  // We will add the 'service' (game loop) route here next
  {
    path: '**',
    redirectTo: ''
  }
];