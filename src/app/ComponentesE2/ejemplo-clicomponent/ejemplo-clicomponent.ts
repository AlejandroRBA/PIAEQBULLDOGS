import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-clicomponent',
  imports: [],
  templateUrl: './ejemplo-clicomponent.html',
  styleUrl: './ejemplo-clicomponent.css',
  standalone: true,
})
export class EjemploCLIComponent {
  TituloCLI = "Este componente fue creado con la Command Line Interface"
}
