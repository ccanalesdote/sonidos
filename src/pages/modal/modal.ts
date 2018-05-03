import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-modal',
    templateUrl: 'modal.html',
})
export class ModalPage {

    nombre: string = "";
    edad: number = 0;

    constructor(public viewCtrl: ViewController, public navParams: NavParams) {
        this.nombre = this.navParams.get("nombre");
        this.edad = this.navParams.get("edad");
    }

    closeWith() {
        let data = {
            nombre: "Daniela",
            edad: 24,
            coords: {
                lat: 10,
                lng: -10
            }
        };
        this.viewCtrl.dismiss(data);
    }

    closeWithout() {
        this.viewCtrl.dismiss();
    }

}
