import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Shot } from './shot.component';
import { ShotEntry } from './shot-entry/shot-entry.component'

import { ROUTES } from './shot.routes';
import {AllShots} from "./all-shots/all-shots.component";

@NgModule({
  declarations: [
    Shot,
    ShotEntry,
    AllShots
  ],
  imports: [
    CommonModule,
    FormsModule,
    ROUTES
  ]
})
export default class ShotModule {

}
