import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';

import { ClienteService } from './service/cliente.service';
import { CategoriaService } from './service/categoria.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [ClienteService, CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
