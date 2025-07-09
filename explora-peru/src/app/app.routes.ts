import { Routes } from '@angular/router';
import { ArequipaComponent } from './pages/arequipa/arequipa'; // Asegúrate de que el componente está bien importado

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app').then(m => m.App),
  },
  {
    path: 'region/:regionName',  // Ruta dinámica para las regiones
    loadComponent: () => import('./pages/arequipa/arequipa').then(m => m.ArequipaComponent)  // Aquí cargamos el componente
  }
];
