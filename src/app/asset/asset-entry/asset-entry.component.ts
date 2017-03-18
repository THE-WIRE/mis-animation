
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase'


@Component({
  //selector: 'image-upload',
  templateUrl: 'asset-entry.template.html'
/*
  <h2>Upload a File</h2>
  <form ngNoForm>
    <input id="file" name="file" type="file" >
    <button (click)="upload()" type="button">Upload</button>
    </form>
    <h2>File Gallery</h2>-->
    <!--<div style="overflow:hidden;">
        <div *ngFor="let img of imageList | async" style="position:relative;width:100px;height:100px;float:left;display:flex;justify-content:center;align-items:center;">
            <img [src]="img.downloadURL | async" style="max-width:100px;max-height:100px;">
            <button (click)="delete(img)" style="position:absolute;top:2px;right:2px;">[x]</button>
        </div>
    </div>
  */
})
export class AssetEntry {
  /**
   * The name of the folder for images
   * eg. posts/angular-is-awesome
   */
  //@Input() folder: string;
/*

  fileList : FirebaseListObservable<Image[]>;
  imageList : Observable<Image[]>;
*/

  constructor(public af: AngularFire) {
  }
  ngOnInit() {

  }

  ngOnChanges() {
    console.log("new values for folder");
    //let storage = firebase.storage();
/*
    //this.fileList = this.af.database.list(`/${this.folder}/images`);
    //console.log("Rendering all images in ",`/${this.folder}/images`)
    this.imageList = this.fileList.map( itemList =>
      itemList.map( item => {
        var pathReference = storage.ref(item.path);
        let result = {$key: item.$key, downloadURL: pathReference.getDownloadURL(), path: item.path, filename: item.filename};
        console.log(result);
        return result;
      })
    );*/
  }


  upload() {
    // Create a root reference
    let storageRef = firebase.storage().ref();
    //let number = (<HTMLInputElement>document.getElementById('file')).length();
    let success = false;
    // This currently only grabs item 0, TODO refactor it to grab them all
   for (let i =0; i < 1; i++) {
      for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[i]]) {
        console.log(selectedFile);
        // Make local copies of services because "this" will be clobbered
        //    let router = this.router;
        //let af = this.af;
        //  let folder = this.folder;
        let path = `/assets/${selectedFile.name}`;
        var iRef = storageRef.child(path);
        iRef.put(selectedFile).then((snapshot) => {
          console.log('Uploaded a blob or file! Now storing the reference at', `/assets`);
          //af.database.list(`/assets`).push({ path: path, filename: selectedFile.name })
        });
      }
   }
  }
  /*delete(image: Image) {
    let storagePath = image.path;
    let referencePath = `${this.folder}/images/` + image.$key;

    // Do these as two separate steps so you can still try delete ref if file no longer exists

    // Delete from Storage
    firebase.storage().ref().child(storagePath).delete()
      .then(
        () => {},
        (error) => console.error("Error deleting stored file",storagePath)
      );

    // Delete references
    this.af.database.object(referencePath).remove()



  }*/
}
























/*
import { Component } from '@angular/core';
//import { FileUploader } from 'ng2-file-upload';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {}

@Component({
  selector: 'simple-demo',
  templateUrl: 'asset-entry.template.html'
})
export class AssetEntry {
  /!*upload : any;
  constructor() {

  }

  task(){
    //firebase.storage().ref('assets/asset1').put(this.upload);
    console.log(this.upload);
  }
*!/


}
*/
