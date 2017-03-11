import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Component({
  templateUrl: 'all-assets.template.html',
  styles:[`
      .hide{ display: none; }
  `]
})
export class AllAssets{
  private isLoaded:boolean = false
  public assets:any[] = [];

  constructor(private af:AngularFire){

    this.af.auth.subscribe(user => {
      this.af.database.list('Users/' + user.uid + '/projects').subscribe(projects => {
        this.assets = [];
        projects.forEach(project => {
          if(project.status == 1){
            console.log(project.$key);
            this.af.database.list('projects/' + project.$key + '/Assets/').subscribe(assets => {
              this.assets.push(assets);
              console.log(assets)
              this.isLoaded = true;

            })
          }
        })
      });
    })
  }

  ngOnInit(){
      this.loadAssets()
  }

  loadAssets(){

  }



}
