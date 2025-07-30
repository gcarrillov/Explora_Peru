import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-boton-about',
  standalone: true,
  templateUrl: './boton-about.html',
  styleUrls: ['./boton-about.css'],
  encapsulation: ViewEncapsulation.None
})
export class BotonAboutComponent {
  onClickAbout() {
    window.open('https://drive.google.com/drive/folders/1Jb6fLnA-lFrR4ANVKPKxNXtXeXKdS1YY?usp=sharing', '_blank');
  }
}
