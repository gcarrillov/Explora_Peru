import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonBusquedaComponent } from '../boton-busqueda/boton-busqueda';
import { BotonAleatorioComponent } from '../boton-aleatorio/boton-aleatorio';
import { BotonAboutComponent } from '../boton-about/boton-about';
import { BotonLoginComponent } from '../boton-login/boton-login';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    BotonBusquedaComponent,
    BotonAleatorioComponent,
    BotonAboutComponent,
    BotonLoginComponent
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {}
