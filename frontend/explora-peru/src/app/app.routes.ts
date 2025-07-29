import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app').then(m => m.App),
  },
  {
    path: 'region/:regionName',  // Ruta dinámica para las regiones
    loadComponent: () => import('./pages/arequipa/arequipa').then(m => m.Arequipa)

  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
