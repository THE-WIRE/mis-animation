import { Component } from '@angular/core'
import { AngularFire } from 'angularfire2'

@Component({
  templateUrl: './project-entry.template.html',
  styles: [`
    .hide{ display:none; }
    .show{ display:block; }
`]
})
export class ProjectEntry{
  projectTypes:any
  isHidden: boolean = true;
  show(){
    this.isHidden = false;
  }
  hide(){
    this.isHidden = true;
  }

  constructor(private af:AngularFire){
    this.projectTypes = this.af.database.list('Acronym', {preserveSnapshot: true});

  }

  submit(formValues){
    console.log(formValues);
  }

  ptypesubmit(formValues){
    console.log(formValues);
  }

}
