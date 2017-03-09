import { Routes, RouterModule }  from '@angular/router';
import { Project } from './project.component';
import {ProjectEntry} from "./project-entry/project-entry.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [

  { path: '', component: Project, children: [
    { path: '', redirectTo: 'entry', pathMatch: 'full' },
    { path: 'entry', component: ProjectEntry, pathMatch: 'full' }
  ]},
];

export const ROUTES = RouterModule.forChild(routes);
