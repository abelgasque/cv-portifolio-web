import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

registerLocaleData(localePt);

const firebaseConfig = {
  apiKey: "AIzaSyCZIWExadW4aAlT5ZBtmB-66rC4b7D7IqU",
  authDomain: "abelgasque-2f8f7.firebaseapp.com",
  projectId: "abelgasque-2f8f7",
  storageBucket: "abelgasque-2f8f7.appspot.com",
  messagingSenderId: "791714596065",
  appId: "1:791714596065:web:c24f6db79119425f98a3a0",
  measurementId: "G-P8JC0VBLVT"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),

    CoreModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
