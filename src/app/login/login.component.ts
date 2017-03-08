import { Component, ViewEncapsulation } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2/index";

@Component({
  selector: 'login',
  styleUrls: [ './login.style.scss' ],
  templateUrl: './login.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'login-page app'
  }
})
export class Login {
  items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
    this.items = af.database.list('/products');
  }

  login() {
    this.af.auth.login({
    });

  }

  logout() {
    this.af.auth.logout();
  }

  signOut() {
    this.af.auth.logout();
  }

  //data= JSON.stringify(this.af.auth);


}
