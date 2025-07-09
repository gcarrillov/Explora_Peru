import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RegionService {
  private apiUrl = 'http://localhost:8000/api/regiones/arequipa/';

  region = signal<any>(null);

  constructor(private http: HttpClient) {}

  getRegionArequipa() {
    this.http.get(this.apiUrl).subscribe({
      next: (data) => this.region.set(data),
      error: (err) => console.error('Error al obtener Arequipa', err)
    });
  }
}
