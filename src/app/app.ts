import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { Etapa2 } from './etapa2/etapa2';
import { Etapa3 } from "./etapa3/etapa3";
import { Etapa4 } from './etapa4/etapa4';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Home, Etapa2, Etapa3, Etapa4, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PiaRBA');
  activeView = 'home';
  
  setView(view:string){
    this.activeView = view;
  }
}
