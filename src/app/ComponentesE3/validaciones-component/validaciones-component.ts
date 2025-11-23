import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validaciones-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './validaciones-component.html',
  styleUrl: './validaciones-component.css',
})
export class ValidacionesComponent {
    usuario: any = {};
    mostrar:boolean = false
    submitForm2(formulario: any){
    
    if (formulario.valid) {
      console.log('Formulario válido, datos del usuario: ', this.usuario);
      this.mostrar = !this.mostrar
    }else{
      console.error('Formulario invalido. Por favor, complete todos los campos correctamente. ');
    }
  }
}
