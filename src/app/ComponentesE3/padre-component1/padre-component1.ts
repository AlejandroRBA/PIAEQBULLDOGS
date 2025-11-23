import { Component } from '@angular/core';
import { HijoComponent1 } from '../hijo-component1/hijo-component1';

@Component({
  selector: 'app-padre-component1',
  imports: [HijoComponent1],
  templateUrl: './padre-component1.html',
  styleUrl: './padre-component1.css',
})
export class PadreComponent1 {
  NombreDelPadre: string = "";
  CambiarNombre(nombre:string){
    this.NombreDelPadre = nombre;
  };
}
