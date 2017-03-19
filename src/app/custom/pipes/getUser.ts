import { Pipe, PipeTransform } from '@angular/core';
import {AngularFire} from "angularfire2/index";

@Pipe({
    name: 'getUser'
})

export class getUser implements PipeTransform {
    constructor(private af:AngularFire){

    }

    displayName:string

    transform(value: any): string{

        this.af.database.object('Users/'+value+'/info')
            .subscribe(data => {
                if(data)
                    this.displayName = data.lname + ' ' + data.fname;
                else
                    this.displayName = "User details unavailable";
            });

        return this.displayName

    }
}