import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MenuComponent } from './menu/menu.component';

=======
import { HomeComponent } from './home/home.component';

function initilizeKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init({
    config: environment.keycloak
  })
}
 
>>>>>>> b9cfb6259c90e9703d584f6564fcee31111ab685

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MenuComponent,
=======
    HomeComponent
>>>>>>> b9cfb6259c90e9703d584f6564fcee31111ab685
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [{
    provide:APP_INITIALIZER,
    useFactory: initilizeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
