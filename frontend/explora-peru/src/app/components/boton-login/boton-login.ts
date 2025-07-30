import { Component, DoCheck, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-login',
  standalone: true,
  templateUrl: './boton-login.html',
  styleUrls: ['./boton-login.css'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None
})
export class BotonLoginComponent implements DoCheck {
  logueado: boolean = false;
  username: string | null = null;

  constructor(private router: Router) {}

  ngDoCheck(): void {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('username');
    this.logueado = !!token;
    this.username = usuario;
  }

  irAlLogin() {
    this.router.navigate(['/login']);
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
