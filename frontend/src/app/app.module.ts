import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCarroComponent } from './paginas/lista-carro/lista-carro.component';
import { CriaCarroComponent } from './paginas/cria-carro/cria-carro.component';
import { EditaCarroComponent } from './paginas/edita-carro/edita-carro.component';
import { DeletaCarroComponent } from './paginas/deleta-carro/deleta-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCarroComponent,
    CriaCarroComponent,
    EditaCarroComponent,
    DeletaCarroComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }