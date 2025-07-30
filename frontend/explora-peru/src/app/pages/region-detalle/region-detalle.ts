import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from '../../services/region/region';
import { HeaderComponent } from '../../components/header/header';

@Component({
  selector: 'app-region-detalle',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './region-detalle.html',
  styleUrls: ['./region-detalle.css']
})
export class RegionDetalleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  regionService = inject(RegionService);

  region = this.regionService.region;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nombre = params.get('nombre') || '';
      this.regionService.getRegionPorNombre(nombre);
    });
  }

  goToViajar() {
    this.router.navigate(['/viajar']);
  }
}
