import { CadastrarInformacoesComponent } from './cliente/cadastrar-cliente/cadastrar-cliente.component';
import { VerPerfilComponent } from './cliente/ver-perfil/ver-perfil.component';
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
  },
  {
    path: 'verperfil',
    component: VerPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
