import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
