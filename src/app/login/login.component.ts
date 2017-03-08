import { Component, ViewEncapsulation } from '@angular/core';
import {AngularFire} from "angularfire2/index";
import { Router } from '@angular/router'

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

  private email: string = ""
  private password: string = ""

  constructor(public af: AngularFire, private router:Router) {

    this.af.auth.subscribe(user => {
      console.log(user);
      if(user){
        this.router.navigate(['app'])
      }
    })

  }

  login(formValues) {
      this.af.auth.login({
        email: formValues.email,
        password: formValues.password
      });

  }

  logout() {
    this.af.auth.logout();
  }


}
