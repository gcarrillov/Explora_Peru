import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionService } from '../../services/region/region';

@Component({
  selector: 'app-arequipa',
  standalone: true,
  templateUrl: './arequipa.html',
  imports: [CommonModule],
})
export class Arequipa {
  constructor(public regionService: RegionService) {}

  buscar() {
    this.regionService.getRegionArequipa();
  }

  aleatorio() {
    this.regionService.getRegionArequipa();
  }
}
