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
  private email: string = "";
  private password: string = "";
  // data : any = {
  //   pid : 2,
  //   pname : 'Doreamon',
  //   ptype : 'Movie',
  //   pDesc: 'This is a story of some robot living in the JAPAN',
  //   crDate: Date.now(),
  //   stDate: Date.now(),
  //   endDate: null,
  //   status: 'Awaiting Inventory',
  //   short: {
  //     id: '2',
  //     type: 'Movie',
  //     status: 'Awaiting Inventory'
  //   },
  //   long: {
  //     name: 'Doreamon',
  //     desc: 'This is a story of some robot living in the JAPAN'
  //   },
  //   date: {
  //     crDate: Date.now(),
  //     stDate: Date.now(),
  //     endDate: Date.now()
  //   }
  // };
  constructor(public af: AngularFire, private router:Router) {

    this.af.auth.subscribe(user => {
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

      this.af.auth.subscribe(user => {
        if(user){
          this.router.navigate(['app'])
        }
      })

  }
}
