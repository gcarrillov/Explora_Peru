import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service'; //

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  // Declaración de propiedades necesarias para el formulario
  username = '';
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  birthdate = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      first_name: this.firstName,
      last_name: this.lastName,
      fecha_nacimiento: this.birthdate
    };

    this.authService.register(userData).subscribe({
      next: (data) => {
        alert('Registro exitoso. Se ha enviado un correo de confirmación.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error desde el backend:', err);
        let mensaje = 'Error en el registro. Verifica los datos ingresados.';

        if (err.error) {
          if (err.error.username) {
            mensaje = 'El nombre de usuario ya está en uso.';
          } else if (err.error.email) {
            mensaje = 'El correo electrónico ya está en uso.';
          } else if (typeof err.error === 'string') {
            mensaje = err.error;
          }
        }

        alert(mensaje);
      }
    });
  }
}