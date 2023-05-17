import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';

@NgModule({
  declarations: [
    CadastrarClienteComponent,
    ListarClienteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    CadastrarClienteComponent
  ]
})
export class ClienteModule { }
