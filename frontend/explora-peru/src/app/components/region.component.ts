import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-regiones',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2 class="mt-4">Explora las Regiones</h2>
      <div class="row mt-3">
        <div class="col-md-4 mb-4" *ngFor="let region of regiones">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ region.nombre }}</h5>
              <p class="card-text">{{ region.descripcion }}</p>
              <button class="btn btn-primary" (click)="verDetalle(region.id)">
                Ver rutas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RegionesComponent {
  private api = inject(ApiService);
  regiones: any[] = [];

  constructor() {
    this.api.getRegiones().subscribe((data) => {
      this.regiones = data;
    });
  }

  verDetalle(regionId: number) {
    // Aquí puedes redirigir a una vista con rutas por región
    console.log(`Región seleccionada: ${regionId}`);
  }
}
