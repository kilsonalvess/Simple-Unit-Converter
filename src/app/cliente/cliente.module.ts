import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';

@NgModule({
  declarations: [
    CadastrarClienteComponent,
    VerPerfilComponent
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
export class InformacoesModule { }
