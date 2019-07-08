import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//ruta
// import {AppRoutingModule} from './app-routing.module'

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ContactosComponent } from './contactos/contactos.component';
import { NoticiaComponent } from './noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    NoticiaComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
