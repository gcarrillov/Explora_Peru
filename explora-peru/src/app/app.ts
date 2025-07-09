import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header';  // Importa el componente del header

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent],  // Asegúrate de agregarlo aquí
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
