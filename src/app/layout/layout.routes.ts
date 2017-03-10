import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => System.import('../dashboard/dashboard.module') },
    { path: 'another', loadChildren: () => System.import('../another/another.module') },
    { path: 'project', loadChildren: () => System.import('../project/project.module') },
    { path: 'asset', loadChildren: () => System.import('../asset/asset.module') },
    { path: 'shot', loadChildren: () => System.import('../shot/shot.module') }
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
