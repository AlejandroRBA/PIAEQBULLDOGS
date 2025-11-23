import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Maestro } from '../maestros';

@Component({
  selector: 'app-directiva-ng-for',
  imports: [CommonModule],
  templateUrl: './directiva-ng-for.html',
  styleUrl: './directiva-ng-for.css'
})
export class DirectivaNgFor {
  ListaMaestro: Maestro[] =[
    {nombre: "Carlos Méndez", edad: 42, materia: "Bases de Datos", activo: true, img_url: "https://picsum.photos/id/447/900"},
    {nombre: "María Lopez", edad: 35, materia: "Int. Redes", activo: false, img_url: "https://picsum.photos/id/338/900"},
    {nombre: "Luis Ramírez", edad: 31, materia: "POO", activo: true, img_url: "https://picsum.photos/id/1/900"},
    {nombre: "Ana Torres", edad: 29, materia: "Sist. Op", activo: false, img_url: "https://picsum.photos/id/64/900"},
    {nombre: "Roberto Moreira", edad: 28, materia: "Angular (😧)", activo: true, img_url: "https://iili.io/KEcVxHB.jpg"}
  ];
}
