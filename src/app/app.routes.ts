import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'etapa4',
    loadChildren: () => import('./ComponentesE4/etapa4.module').then(m => m.Etapa4Module)
    }
];
