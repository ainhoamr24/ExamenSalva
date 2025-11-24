import { Routes } from '@angular/router';
import { Tareas } from './Components/tareas/tareas';
import { Panel } from './Components/panel/panel';
import { Inicio } from './Components/inicio/inicio';
import { Fin } from './Components/fin/fin';
import { Error } from './Components/error/error';
import { panelGuardGuard } from './Guards/panel-guard-guard';

export const routes: Routes = [
    {path: '', component: Inicio},
    {path: 'tareas', component: Tareas},
    {path: 'fin/:id', component: Fin },
    {path: 'panel', component: Panel, canActivate: [panelGuardGuard] },
    {path: 'error', component: Error },
];
