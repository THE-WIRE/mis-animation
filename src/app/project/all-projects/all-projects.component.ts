import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2"

@Component({
  templateUrl: './all-projects.template.html',
})
export class AllProjects{
  projects: FirebaseListObservable<any[]>
  constructor(private af:AngularFire){

  }
  ngOnInit(){
    this.projects = this.af.database.list('projects');
  }

}
