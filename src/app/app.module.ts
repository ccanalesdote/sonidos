import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { ModalPage, SettingsPage, SoundsPage, TabsPage, MainPage, TestPage } from '../pages/index.pages';

@NgModule({
    declarations: [
        MyApp,
        ModalPage,
        SettingsPage,
        SoundsPage,
        TabsPage,
        MainPage,
        TestPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ModalPage,
        SettingsPage,
        SoundsPage,
        TabsPage,
        MainPage,
        TestPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
