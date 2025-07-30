import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {RegionService} from '../../services/region/region';
import {HeaderComponent} from '../../components/header/header';


@Component({
  selector: 'app-region-detalle',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './region-detalle.html',
  styleUrls: ['./region-detalle.css']
})
export class RegionDetalleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  regionService = inject(RegionService);

  region = this.regionService.region;

  ngOnInit(): void {
    const regionData = this.route.snapshot.data['regionData']
    if (regionData) {
      this.regionService.setRegionData(regionData);
      return;
    }
    const nombre = this.route.snapshot.paramMap.get('nombre') || '';
    this.regionService.getRegionPorNombre(nombre);
  }
}
