import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-login',
  standalone: true,
  templateUrl: './boton-login.html',
  styleUrls: ['./boton-login.css'],
  encapsulation: ViewEncapsulation.None
})
export class BotonLoginComponent {
  constructor(private router: Router) {}

  irAlLogin() {
    this.router.navigate(['/login']);
  }
}
