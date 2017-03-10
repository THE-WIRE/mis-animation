import {Component} from "@angular/core";
import {AngularFire,FirebaseListObservable} from "angularfire2/index";

@Component({
  templateUrl: './all-projects.template.html'
})
export class AllProjects {
  parr: FirebaseListObservable<any[]>;
  //projectObs: FirebaseObjectObservable<any[]>;
  //projects: any;
  constructor(private af : AngularFire){
    this.parr = af.database.list('projects',{preserveSnapshot : true});
    //this.parr.map(events => events);

    this.parr.subscribe(snapshot=> {
        snapshot.forEach(snapshot=>{
          console.log(snapshot.key);
          console.log(snapshot.val())
        })
    });
    /*this.projectObs.subscribe(project => {
      //this.parr = Object.keys(project).map(function(k){return project[k]})
      this.parr = project;

    })*/
  }



}


