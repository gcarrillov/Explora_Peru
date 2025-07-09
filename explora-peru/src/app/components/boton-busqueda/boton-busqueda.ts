import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-busqueda',
  standalone: true,
  templateUrl: './boton-busqueda.html',
  styleUrls: ['./boton-busqueda.css']
})
export class BotonBusquedaComponent {
  
  constructor(private router: Router) {}

  // Función para redirigir cuando el usuario escribe en el input
  onSearch(event: any) {
  const query = event.target.value.toLowerCase().trim();  // Limpiar espacios y poner en minúsculas
  if (query) {
    this.router.navigate([`/region/${query}`]);  // Redirigir a la página correspondiente
  }
}

}
