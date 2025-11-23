import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-component2',
  imports: [],
  templateUrl: './hijo-component2.html',
  styleUrl: './hijo-component2.css',
})
export class HijoComponent2 {
  @Output() mensajeEnviado = new EventEmitter<string>();
  enviarMensaje(mensaje:string) {
    this.mensajeEnviado.emit(mensaje);
  }
}
