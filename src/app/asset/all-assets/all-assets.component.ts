import {Component} from "@angular/core";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
//import {of} from "../../Observable";

@Component({
  templateUrl: 'all-assets.template.html',
  styles:[`
      .hide{ display: none; }
  `]
})
export class AllAssets{
  private isLoaded:boolean = true
  private projectMenu:any[]
  public assets:any;
  private user : any;
  /*private currentProject : any;*/
  constructor(private af:AngularFire){

    this.af.auth.subscribe(user => {
      this.user = user;
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


    this.isLoaded = false;

    this.af.database.list('projects/' + formValue.projectKey + '/Assets/').subscribe(assets => {

        this.assets = assets;
        for(let i in assets) {
          //console.log(asset);
          this.af.database.object('Users/'+this.user.uid+'/projects/' + formValue.projectKey + '/Assets/'+assets[i].$key).subscribe(data=>{
            console.log('hi  ',data);
            this.assets[assets[i].$key].user = data
              this.assets[assets[i].$key].proKey =  formValue.projectKey;
          });
        }
        //console.log(this.assets);
        this.isLoaded = true;

      },
      error => {
        console.log(error);
        console.log('Something happened3!');
      })
  }


    initiate(projectkey : string,assetkey: number){
      this.af.auth.subscribe(user=>{
        if(user){
          this.af.database.object('Users/'+user.uid+'/projects/'+projectkey+'/Assets/'+assetkey).update({status : 1,initialTime: Date.now(), startTime: Date.now()});
        }
      })
    }

  start(projectkey : string,assetkey: number){
    this.af.auth.subscribe(user=>{
      if(user){
        this.af.database.object('Users/'+user.uid+'/projects/'+projectkey+'/Assets/'+assetkey).update({status : 1, startTime: Date.now()});
      }
    })
  }

  pause(projectkey : string,assetkey: number){
    let startTime : any;
    let overallTime: any;
    this.af.auth.subscribe(user => {
      if(user){
        this.af.database.object('Users/'+user.uid+'/projects/'+projectkey+'/Assets/'+assetkey).subscribe(data => {
          startTime = data.startTime;
          overallTime = data.overallTime ? data.overallTime : 0;
        });

        overallTime += Date.now() - startTime;
        this.af.database.object('Users/'+user.uid+'/projects/'+projectkey+'/Assets/'+assetkey).update({status : 2, overallTime: overallTime});


      }
    })
  }

}


