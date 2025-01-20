import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Router, NavigationEnd } from '@angular/router';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),

    LandingPageModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Verifica se o measurementId está configurado
    if (environment.firebaseConfig.measurementId) {
      // Inicializa o Google Analytics
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${environment.firebaseConfig.measurementId}`;
      document.head.appendChild(gtagScript);

      window.dataLayer = window.dataLayer || [];
      
      // Substituindo a declaração da função por uma expressão de função
      const gtag = function (...args: any[]) {
        window.dataLayer.push(args);
      };

      gtag('js', new Date());
      gtag('config', environment.firebaseConfig.measurementId);

      // Rastreia navegação entre páginas
      router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          gtag('config', environment.firebaseConfig.measurementId, {
            page_path: event.urlAfterRedirects,
          });
        }
      });
    } else {
      console.warn('Google Analytics measurementId não configurado.');
    }
  }
}