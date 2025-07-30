import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-boton-aleatorio',
  standalone: true,
  templateUrl: './boton-aleatorio.html',
  styleUrls: ['./boton-aleatorio.css'],
  encapsulation: ViewEncapsulation.None
})
export class BotonAleatorioComponent {
  constructor(private router: Router) {}
  onDescubrirRegion() {
    this.router.navigate(['/descubrir']);
  }
  regiones: string[] = ['arequipa', 'lima', 'cusco', 'la libertad', 'puno'];

  onClickAleatorio() {
    const aleatoria = this.regiones[Math.floor(Math.random() * this.regiones.length)];
    this.router.navigate([`/region/${aleatoria}`]);
  }
}
