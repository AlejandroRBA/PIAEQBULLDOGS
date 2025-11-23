import { Component } from '@angular/core';
import { Componente1Component } from '../ComponentesE2/componente1-component/componente1-component';
import { Contador } from '../ComponentesE2/contador/contador';
import { DirectivaNgFor } from '../ComponentesE2/directiva-ng-for/directiva-ng-for';
import { DirectivaNgIf } from '../ComponentesE2/directiva-ng-if/directiva-ng-if';
import { EjemploCLIComponent } from '../ComponentesE2/ejemplo-clicomponent/ejemplo-clicomponent';
import { EjemploManual } from '../ComponentesE2/ejemplo-manual/ejemplo-manual';
import { EnlaceClase } from '../ComponentesE2/enlace-clase/enlace-clase';
import { EnlacePropiedades } from '../ComponentesE2/enlace-propiedades/enlace-propiedades';
import { VariablesPlantilla } from '../ComponentesE2/variables-plantilla/variables-plantilla';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etapa2',
  imports: [CommonModule, Componente1Component, Contador, DirectivaNgFor, DirectivaNgIf, EjemploCLIComponent,EjemploManual, EnlaceClase, EnlacePropiedades,VariablesPlantilla],
  templateUrl: './etapa2.html',
  styleUrl: './etapa2.css',
})
export class Etapa2 {
  componente = 0;
}
