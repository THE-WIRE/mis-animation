import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { User } from './user.component';
import { AddUser } from './add-user/add-user.component'
import { ManageUsers } from './manage-users/manage-users.component'

import { ROUTES } from './user.routes';

@NgModule({
  declarations: [
    User,
    AddUser,
    ManageUsers
  ],
  imports: [
    CommonModule,
    FormsModule,
    ROUTES
  ]
})
export default class UserModule {

}
