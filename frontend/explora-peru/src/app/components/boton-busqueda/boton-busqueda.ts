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

  onSearch(event: any) {
  const query = event.target.value.toLowerCase().trim();
  if (query) {
    this.router.navigate([`/region/${query}`]);
  }
}

}
