import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClienteModule } from './cliente/cliente.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarContaComponent } from './conta/cadastrar-conta/cadastrar-conta.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastrarContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ClienteModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
