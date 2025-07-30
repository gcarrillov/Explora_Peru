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
  }
];
