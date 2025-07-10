import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app').then(m => m.App),
  },
  {
    path: 'region/:regionName',  // Ruta dinámica para las regiones
    loadComponent: () => import('./pages/arequipa/arequipa').then(m => m.Arequipa)

  }
];
