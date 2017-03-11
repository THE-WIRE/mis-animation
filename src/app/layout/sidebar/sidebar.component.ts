import {Component, Input} from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: '[sidebar]',
  templateUrl: './sidebar.template.html',
  styles: [`
      .hide{ 
          
          opacity: 0;
          
       }
       .show{
          color: #FFFFFF;
      
          -webkit-transition: opacity 4s ease-in-out;
          -moz-transition: opacity 4s ease-in-out;
          -ms-transition: opacity 4s ease-in-out;
          -o-transition: opacity 4s ease-in-out;
           opacity: 1;
       }
  `]
})
export class Sidebar {

  @Input() menu:any
  private isHidden:boolean = false

  constructor(private af:AngularFire){
    console.log(this.menu);
  }

  getMenu(role:string){
    this.af.database.list('Menus/'+role).subscribe(res => {
      this.menu = res;
      this.isHidden = true;
    })
  }

  ngOnInit(){
    this.af.auth.subscribe(user => {
      this.af.database.object('Users/'+user.uid+'/info').subscribe(data => {
        this.getMenu(data.role)
      })
    })
  }

}
