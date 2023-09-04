import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModalComponent } from './user-modal/user-modal.component'; // Importa UserModalComponent

@NgModule({
  declarations: [AppComponent, UserModalComponent], // Agrega UserModalComponent aquí
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule], // Agrega IonicModule aquí
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
