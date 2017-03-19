import {Component, Output, EventEmitter, Renderer, ElementRef} from '@angular/core';
import { AngularFire } from 'angularfire2/index'
import {Router} from "@angular/router";

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.template.html'
})
export class Navbar {
  @Output() changeSidebarPosition = new EventEmitter();
  @Output() changeSidebarDisplay = new EventEmitter();
  @Output() openSidebar = new EventEmitter();

  public userDisplayName:string

  display: string = 'Left';
  radioModel: string = 'Left';
  searchFormState: boolean = true;

  constructor(private renderer: Renderer, private el: ElementRef, public af:AngularFire, private router:Router) {}

  sidebarPosition(position): void {
    this.changeSidebarPosition.emit(position);
  }

  sidebarDisplay(position): void {
    this.changeSidebarDisplay.emit(position);
  }

  sidebarOpen(): void {
    this.openSidebar.emit();
  }

  searchFormOpen(): void {
    if(this.searchFormState) {
      this._changeStyleElement('#search-form', 'height', '40px');
      this._changeStyleElement('.notifications ', 'top', '86px');
    } else {
      this._changeStyleElement('#search-form', 'height', '0px');
      this._changeStyleElement('.notifications ', 'top', '46px');
    }
    this.searchFormState = !this.searchFormState;
  }

  _changeStyleElement(selector, styleName, styleValue): void {
    this.renderer.setElementStyle(this.el.nativeElement.querySelector(selector), styleName, styleValue);
  }

  ngOnInit(){
    this.af.auth.subscribe(user => {
      if(user) {
        this.af.database.object('Users/'+user.uid+'/info').subscribe(data => {
          this.userDisplayName = data.lname + ' ' + data.fname;
        })
      }
    })
  }

  logout(){
    this.af.auth.logout();
    this.router.navigate(['login'])
  }
}
