import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Project } from './project.component';
import { ProjectEntry } from './project-entry/project-entry.component'

import { ROUTES } from './project.routes';

@NgModule({
  declarations: [
    Project,
    ProjectEntry
  ],
  imports: [
    CommonModule,
    FormsModule,
    ROUTES
  ]
})
export default class ProjectModule {

}
