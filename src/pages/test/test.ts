import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-test',
    templateUrl: 'test.html',
})
export class TestPage {

    animal:any = {};

    constructor(private navParams: NavParams, private navCtrl:NavController) {
        console.log(navParams);
        this.animal = this.navParams.get("animal");
    }

    irAtras(){
        this.navCtrl.pop();
    }

    irRoot(){
        this.navCtrl.popToRoot();
    }

}
