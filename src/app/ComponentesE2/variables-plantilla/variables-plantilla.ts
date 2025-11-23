import { Component } from '@angular/core';

@Component({
  selector: 'app-variables-plantilla',
  imports: [],
  templateUrl: './variables-plantilla.html',
  styleUrl: './variables-plantilla.css'
})
export class VariablesPlantilla {
  datos:string = ""
  MostrarDatos (nombre:string, apellido: string, correo:string, telefono:string){
    this.datos = "Nombre: "+ nombre + "\nApellido: " + apellido + "\nCorreo: " + correo + "\nTeléfono: " + telefono
  }
}