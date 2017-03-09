import { Routes, RouterModule }  from '@angular/router';
import { Project } from './asset.component';
import {AssetEntry} from "./asset-entry/asset-entry.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [

  { path: '', component: Project, children: [
    { path: '', redirectTo: 'entry', pathMatch: 'full' },
    { path: 'entry', component: AssetEntry, pathMatch: 'full' }
  ]},
];

export const ROUTES = RouterModule.forChild(routes);
