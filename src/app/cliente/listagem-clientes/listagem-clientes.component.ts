import { Component } from '@angular/core';
import {Cliente} from '../../shared/modelo/cliente';
import {CLIENTES} from '../../shared/modelo/CLIENTES';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent {

  clientes = CLIENTES;
  excluir(clienteARemover: Cliente): void {
    const indx = this.clientes.findIndex(cliente =>
      cliente.cpf === clienteARemover.cpf);

    this.clientes.splice(indx, 1);
  }

}
