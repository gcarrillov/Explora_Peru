import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import { HeaderComponent } from '../../components/header/header';

@Component({
  selector: 'app-viajar',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './viajar.html',
  styleUrls: ['./viajar.css']
})
export class ViajarComponent {
  origen = '';
  destino = '';
  empresa = '';
  fecha = '';
  emailDestino = 'exploraperu.reservas@gmail.com';

  regiones = ['Ica', 'La Libertad', 'Lima', 'Puno', 'Cusco', 'Arequipa'];
  empresas = ['Cruz del Sur', 'Oltursa', 'Flores'];

  reservar() {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('¡Gracias por tu preferencia!', 20, 20);
    doc.setFontSize(12);
    doc.text(`Ruta: ${this.origen} → ${this.destino}`, 20, 40);
    doc.text(`Empresa seleccionada: ${this.empresa}`, 20, 50);
    doc.text(`Fecha de viaje: ${this.fecha}`, 20, 60);
    doc.text('Estamos buscando los mejores planes para ti.', 20, 80);
    doc.text('Te notificaremos pronto con las mejores opciones.', 20, 90);

    doc.save('reserva_viaje.pdf');
  }
}
