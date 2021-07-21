import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './home/home.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { CarrilImagenesComponent } from './carril-imagenes/carril-imagenes.component';

import {HttpClientModule} from '@angular/common/http';

function initilizeKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init({
    config: environment.keycloak
  });
}


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PreguntasComponent,
    CarrilImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initilizeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
