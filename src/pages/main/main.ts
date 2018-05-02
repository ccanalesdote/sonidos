import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SoundsPage } from '../index.pages';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-main',
    templateUrl: 'main.html',
})
export class MainPage {

    sonidos:any = SoundsPage;

    constructor(public navCtrl: NavController) {
    }

    navegarPagina(){
        this.navCtrl.push(SoundsPage);
    }


}
