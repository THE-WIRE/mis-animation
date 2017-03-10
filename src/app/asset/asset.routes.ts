import { Routes, RouterModule }  from '@angular/router';
import { Asset } from './asset.component';
import {AssetEntry} from "./asset-entry/asset-entry.component";
import {AllAssets} from "./all-assets/all-assets.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [

  { path: '', component: Asset, children: [
    { path: '', redirectTo: 'AllAssets', pathMatch: 'full' },
    { path: 'all', component: AllAssets, pathMatch: 'full' },
    { path: 'entry', component: AssetEntry, pathMatch: 'full' }
  ]},
];

export const ROUTES = RouterModule.forChild(routes);
