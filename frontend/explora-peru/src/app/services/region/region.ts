import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RegionService {
  private baseUrl = 'http://localhost:8000';

  region = signal<any>(null);

  constructor(private http: HttpClient) {}

  getRegionPorNombre(nombre: string) {
    const url = `${this.baseUrl}/api/regiones/buscar/?nombre=${nombre.toLowerCase()}`;
    console.log("📡 URL consultada:", url);

    this.http.get(url).subscribe({
      next: (data) => {
        console.log("✅ Datos recibidos:", data);
        this.region.set(data);
      },
      error: (err) => {
        console.error("Error al obtener región:", err);
        this.region.set(null);
      }
    });
  }
}
