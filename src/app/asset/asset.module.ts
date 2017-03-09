import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Project } from './asset.component';
import { AssetEntry } from './asset-entry/asset-entry.component'

import { ROUTES } from './asset.routes';

@NgModule({
  declarations: [
    Project,
    AssetEntry
  ],
  imports: [
    CommonModule,
    FormsModule,
    ROUTES
  ]
})
export default class ProjectModule {

}
