import { CadastrarInformacoesComponent } from './cliente/cadastrar-cliente/cadastrar-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'cadastrarcliente',
    component: CadastrarInformacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
