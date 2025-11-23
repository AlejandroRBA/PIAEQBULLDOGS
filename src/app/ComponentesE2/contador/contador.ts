import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {
  numero: number=1

  Incrementar(){
    this.numero = this.numero +1;
  }

  Decrementar(){
    this.numero--;
  }
}
