import { Component } from '@angular/core';

@Component({
  selector: 'app-enlace-clase',
  imports: [],
  templateUrl: './enlace-clase.html',
  styleUrl: './enlace-clase.css'
})
export class EnlaceClase {
  clase_actual:string='Ninguna'
  deshabilitado:boolean=false
  grande:boolean=false
  cursiva:boolean=false
  subrayado:boolean=false
}
