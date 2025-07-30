import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { AuthService } from '../../services/auth/auth.service';
import { HeaderComponent } from '../../components/header/header'; 

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    });
  }
}