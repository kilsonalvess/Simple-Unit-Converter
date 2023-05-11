import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { CpfPipe } from './cliente/pipes/pipe/cpf.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {LayoutModule} from './layout/layout.module';
import {ClienteModule} from './cliente/cliente.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './cliente/login/login.component';
import { LoginClienteComponent } from './cliente/login-cliente/login-cliente.component';
import { SobreAppComponent } from './cliente/sobre-app/sobre-app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginClienteComponent,
    SobreAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    ClienteModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
