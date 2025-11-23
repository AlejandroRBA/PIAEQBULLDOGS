import { Component } from '@angular/core';
import { HijoComponent2 } from '../hijo-component2/hijo-component2';

@Component({
  selector: 'app-padre-component2',
  imports: [HijoComponent2],
  templateUrl: './padre-component2.html',
  styleUrl: './padre-component2.css',
})
export class PadreComponent2 {
  mensajeRecibido: string = '';

  recibirMensaje(mensaje: string){
    this.mensajeRecibido = mensaje;
  }
}
