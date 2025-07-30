import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private baseUrl = 'http://127.0.0.1:8000/api/'; // o el dominio real si haces deploy

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}login/`, { username, password });
  }

  register(data: any) {
    return this.http.post<any>(`${this.baseUrl}register/`, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
