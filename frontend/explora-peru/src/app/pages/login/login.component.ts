import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (data) => {
        // ✅ Guardar token y username en localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);

        // Redirigir al inicio
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    });
  }
}