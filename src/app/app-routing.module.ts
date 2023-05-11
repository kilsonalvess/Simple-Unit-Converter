import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemClienteComponent} from './cliente/mantem-cliente/mantem-cliente.component';
import {ListagemClientesComponent} from './cliente/listagem-clientes/listagem-clientes.component';

const routes: Routes = [
  {
    path: 'cadastrocliente',
    component: MantemClienteComponent
  },
  {
    path: 'editacliente/:id',
    component: MantemClienteComponent
  },
  {
    path: 'listagemclientes',
    component: ListagemClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
