import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-region-detalle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4" *ngIf="region">
      <h2>{{ region.nombre }}</h2>
      <p>{{ region.descripcion }}</p>

      <h4>Rutas:</h4>
      <ul>
        <li *ngFor="let ruta of rutas">
          {{ ruta.origen }} → {{ ruta.destino }}
        </li>
      </ul>
    </div>
  `
})
export class RegionDetalleComponent {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);

  region: any = null;
  rutas: any[] = [];

  constructor() {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    if (nombre) {
      this.api.getRegionPorNombre(nombre).subscribe({
        next: (data) => this.region = data,
        error: () => console.error('Región no encontrada')
      });

      this.api.getRutasPorRegion(nombre).subscribe({
        next: (data) => this.rutas = data,
        error: () => console.error('No se encontraron rutas')
      });
    }
  }
}
