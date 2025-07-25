import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { RegionesComponent } from './components/region.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegionesComponent],
  template: `
    <h1>Explora Perú</h1>
    <app-regiones></app-regiones>
  `,
})
export class App {}