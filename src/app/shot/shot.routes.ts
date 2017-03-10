import { Routes, RouterModule }  from '@angular/router';
import { Shot } from './shot.component';
import {ShotEntry} from "./shot-entry/shot-entry.component";
import {AllShots} from "./all-shots/all-shots.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [

  { path: '', component: Shot, children: [
    { path: '', redirectTo: 'entry', pathMatch: 'full' },
    { path: 'all', component: AllShots, pathMatch: 'full' },
    { path: 'entry', component: ShotEntry, pathMatch: 'full' }
  ]},
];

export const ROUTES = RouterModule.forChild(routes);
