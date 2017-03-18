import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Component({
  templateUrl: 'all-assets.template.html',
  styles:[`
      .hide{ display: none; }
  `]
})
export class AllAssets{
  private isLoaded:boolean = true
  private projectMenu:any[]
  public assets:any

  constructor(private af:AngularFire, private af2:AngularFire){

    this.af.auth.subscribe(user => {
      this.af.database.list('Users/' + user.uid + '/projects').subscribe(projects => {

        this.projectMenu = [];
        let length = projects.length;
        projects.forEach(project => {
          if(project.status == 1){
            this.af.database.object('projects/' + project.$key + '/long').subscribe(info => {

              console.log(info);
              let data  = { "info" : info, "key": project.$key};
              this.projectMenu.push(data);

              if(this.projectMenu.length > length){
                this.projectMenu = []
                this.projectMenu.push(data)
              }
            })
          }
        })
      })
    })
  }

  getAssets(formValue){
console.log(formValue);

    this.isLoaded = false

    this.af.database.list('projects/' + formValue.projectKey + '/Assets/').subscribe(assets => {

        this.assets = assets;
        this.isLoaded = true;
      },
      error => {
        console.log(error);
        console.log('Something happened3!');
      })
  }



}
