import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.pages';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
    }

    goMain() {
        this.navCtrl.parent.select(0);
    }

    showModal() {
        let modal = this.modalCtrl.create(ModalPage, { nombre: "Cristian", edad: 28 });
        modal.present();
        modal.onDidDismiss(params => {
            if (params) {
                console.log('Datos del Modal');
                console.log(params);
            } else {
                console.log('Sin Parámetros');
            }
        });
    }

}
