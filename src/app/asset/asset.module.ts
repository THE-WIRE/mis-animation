import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Asset } from './asset.component';
import { AssetEntry } from './asset-entry/asset-entry.component'

import { ROUTES } from './asset.routes';
import {AllAssets} from "./all-assets/all-assets.component";
import {AssetDetails} from "./all-assets/asset-details.component";
import {getUser} from "../custom/pipes/getUser";

@NgModule({
  declarations: [
    Asset,
    AssetEntry,
    AllAssets,
    AssetDetails,
    getUser
  ],
  imports: [
    CommonModule,
    FormsModule,
    ROUTES
  ]
})
export default class AssetModule {

}
