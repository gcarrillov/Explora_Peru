import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header';
import { RegionesComponent } from '../components/region.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RegionesComponent
  ],
  template: `
    <app-header></app-header>
    <div class="container mt-4">
      <app-regiones></app-regiones>
    </div>
  `
})
export class HomeComponent {}
