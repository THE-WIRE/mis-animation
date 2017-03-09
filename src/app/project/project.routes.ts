import { Routes, RouterModule }  from '@angular/router';
import { Project } from './project.component';
import { ProjectEntry } from "./project-entry/project-entry.component";
import { AllProjects } from "./all-projects/all-projects.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [

  { path: '', component: Project, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'entry', component: ProjectEntry, pathMatch: 'full' },
    { path: 'all', component: AllProjects, pathMatch: 'full'}
  ]},
];

export const ROUTES = RouterModule.forChild(routes);
