import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-component1',
  imports: [],
  templateUrl: './hijo-component1.html',
  styleUrl: './hijo-component1.css',
})
export class HijoComponent1 {
  @Input() nombre?: string;
}
