import { Routes, RouterModule }  from '@angular/router';
import { User } from './user.component';
import { AddUser } from "./add-user/add-user.component";
import { ManageUsers } from "./manage-users/manage-users.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [

  { path: '', component: User, children: [
    { path: '', redirectTo: 'manage', pathMatch: 'full' },
    { path: 'add', component: AddUser, pathMatch: 'full' },
    { path: 'manage', component: ManageUsers, pathMatch: 'full' }
  ]},
];

export const ROUTES = RouterModule.forChild(routes);
