import { Component } from '@angular/core';
import { ValidacionesComponent } from "../ComponentesE3/validaciones-component/validaciones-component";
import { PadreComponent2 } from "../ComponentesE3/padre-component2/padre-component2";
import { PadreComponent1 } from '../ComponentesE3/padre-component1/padre-component1';

@Component({
  standalone: true,
  selector: 'app-etapa3',
  imports: [ValidacionesComponent, PadreComponent1,  PadreComponent2],
  templateUrl: './etapa3.html',
  styleUrl: './etapa3.css',
})
export class Etapa3 {
  activeView = 'Validaciones';
  
  setView(view:string){
    this.activeView = view;
  }
}
