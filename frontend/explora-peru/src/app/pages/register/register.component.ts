import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    fecha_nacimiento: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.user).subscribe({
      next: (data) => {
        this.authService.saveToken(data.token);
        alert('Usuario registrado correctamente. Se ha enviado un correo de confirmación.');
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert('Error en el registro. Verifica los datos ingresados.');
      }
    });
  }
}
