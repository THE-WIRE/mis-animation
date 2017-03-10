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
  Tname : string;
  Tacr : string;
  data : any;
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

    this.data = {
      pid : formValues.pid,
      pname : formValues.pname,
      ptype : formValues.ptype,
      pdesc : formValues.pdesc,
      crDate: Date.now(),
      stDate: '',
      endDate: '',
      status: 'Awaiting Inventory',
      short: {
        id: formValues.pid,
        type: formValues.ptype,
        status:'Awaiting Inventory'
      },
      long: {
        name: formValues.pname,
        desc: formValues.pdesc
      },
      date: {
        crDate: Date.now(),
        stDate: '',
        endDate: ''
      }
    };

    const items = this.af.database.list('/projects');
    items.push(this.data).then(_ => console.log('success'))
        .catch(err => console.log(err, 'You do not have access!'));
    console.log(formValues);
  }

  ptypesubmit(){
    //let name : string = formValues.ptypename;
    //let acr : string = formValues.ptypeacr;
    const acro = this.af.database.list('/Acronym');
    acro.push({"name" : this.Tname,"acr" : this.Tacr}).then(_ => {
      this.Tname = null;
      this.Tacr = null;
      this.hide();
      console.log('success')
    })
        .catch(err => console.log(err, 'You do not have access!'));
    console.log(this.Tname);
    console.log(this.Tacr);
  }

}
