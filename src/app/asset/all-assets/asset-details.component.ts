import {Component, Input} from "@angular/core";


@Component({
    selector: 'asset-details',
    templateUrl: 'asset-details.template.html'
})
export class AssetDetails{

    @Input()  asset:any;

}