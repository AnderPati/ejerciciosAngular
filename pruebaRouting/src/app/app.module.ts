import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaApiComponent } from './prueba-api/prueba-api.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { SnakegameComponent } from './snakegame/snakegame.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaApiComponent,
    HomeComponent,
    SnakegameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
