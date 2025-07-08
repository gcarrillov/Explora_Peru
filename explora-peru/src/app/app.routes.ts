import { Routes } from '@angular/router';
import { ArequipaComponent } from './pages/arequipa/arequipa';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app').then(m => m.App),
  },
  {
    path: 'region/arequipa',
    component: ArequipaComponent
  }
];
