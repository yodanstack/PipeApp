import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SharedModule } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//idiomas configuracion del locale de la pp
import localesEsMX from '@angular/common/locales/es-MX'
import localesFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common'

registerLocaleData( localesEsMX );
registerLocaleData( localesFrCA );

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PrimeNGModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-MX'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
