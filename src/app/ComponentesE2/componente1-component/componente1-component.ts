import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1-component',
  imports: [],
  templateUrl: './componente1-component.html',
  styleUrl: './componente1-component.css',
})
export class Componente1Component {
  persona = {
    nombre: "Alejandro",
    edad: 17,
    color: "Azul"
}
}
