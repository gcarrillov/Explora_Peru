import {Routes} from '@angular/router';
import {randomRegionResolver} from './resolvers/random-region-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'region/:nombre',
    loadComponent: () =>
      import('./pages/region-detalle/region-detalle').then((m) => m.RegionDetalleComponent),
  },
  {
    path: 'descubrir',
    loadComponent: () =>
      import('./pages/region-detalle/region-detalle').then((m) => m.RegionDetalleComponent),
    resolve: {regionData: randomRegionResolver}
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
];
