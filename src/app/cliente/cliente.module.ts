import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

import { PipesModule } from '../pipes/pipes.module';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';
import { MantemClienteComponent } from './mantem-cliente/mantem-cliente.component';



@NgModule({
  declarations: [
    ListagemClientesComponent,
    MantemClienteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
    FlexModule,
    RouterLink
  ],
  exports: [
    ListagemClientesComponent,
    MantemClienteComponent
  ]
})
export class ClienteModule { }
