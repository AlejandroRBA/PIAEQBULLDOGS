import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directiva-ng-if',
  imports: [CommonModule],
  templateUrl: './directiva-ng-if.html',
  styleUrl: './directiva-ng-if.css'
})
export class DirectivaNgIf {
  MostrarInfo: boolean = false;
}
