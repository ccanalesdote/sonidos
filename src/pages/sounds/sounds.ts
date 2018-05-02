import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Refresher, reorderArray } from 'ionic-angular';

import { Animales } from '../../data/data.animales';
import { Animal } from '../../interfaces/animal.interface';
import { TestPage } from '../index.pages';

@Component({
    selector: 'page-sounds',
    templateUrl: 'sounds.html',
})
export class SoundsPage {

    animales: Animal[] = [];
    audio = new Audio();
    audioTiempo: any;
    ordenando: boolean = false;

    constructor(public navCtrl: NavController) {
        this.animales = Animales.slice(0);
    }

    reproducir(animal: Animal) {
        this.pausar_audio(animal);
        if (animal.reproduciendo) {
            animal.reproduciendo = false;
            return;
        }
        this.audio.src = animal.audio;
        this.audio.load();
        this.audio.play();
        animal.reproduciendo = true;
        this.audioTiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);
    }

    private pausar_audio(animalSel: Animal) {
        clearTimeout(this.audioTiempo);
        this.audio.pause();
        this.audio.currentTime = 0;

        for (let animal of this.animales) {
            if (animal.nombre != animalSel.nombre) {
                animal.reproduciendo = false;
            }
        }
    }

    borrar(idx: number) {
        this.animales.splice(idx, 1);
    }

    recargar(refresher: Refresher) {
        console.log('Inicio');
        setTimeout(() => {
            console.log('Termino');
            this.animales = Animales.slice(0);
            refresher.complete();
        }, 1500);
    }

    reordenar(indices: any) {
        console.log(indices);
        this.animales = reorderArray(this.animales, indices);
    }

    cambiar(valor) {
        this.ordenando = valor;
        console.log(this.ordenando);
    }

    irPagina(animal: Animal) {
        console.log(animal);
        this.navCtrl.push(TestPage, { animal });
    }

}
