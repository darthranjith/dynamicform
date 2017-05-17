import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DynamicForm } from '../pages/home/dynamic-form';
import { DynamicFormElement } from '../pages/home/dynamic-form-element';
import { FormElements } from '../providers/formelements';
import { FormService } from '../providers/form-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DynamicForm,
    DynamicFormElement
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FormElements,
    FormService
  ]
})
export class AppModule {}
