import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { SoundsPage } from '../index.pages';

@Component({
    selector: 'page-main',
    templateUrl: 'main.html',
})
export class MainPage {

    sonidos: any = SoundsPage;

    constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
    }

    navegarPagina() {
        this.navCtrl.push(SoundsPage);
    }

    showMenu() {
        this.menuCtrl.toggle();
    }


}
