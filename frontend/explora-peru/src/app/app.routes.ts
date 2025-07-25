import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'region/:nombre',
    loadComponent: () =>
      import('./components/region-detalle.component').then((m) => m.RegionDetalleComponent),
  }
];