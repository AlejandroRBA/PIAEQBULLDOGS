import { Component } from '@angular/core';
import { Etapa4RoutingModule } from "../ComponentesE4/etapa4-routing.module";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etapa4',
  standalone: true,
  imports: [Etapa4RoutingModule, CommonModule],
  templateUrl: './etapa4.html',
  styleUrl: './etapa4.css',
})
export class Etapa4 {
  activeView = 'Enrutamiento';
  
  setView(view:string){
    this.activeView = view;
}
}
