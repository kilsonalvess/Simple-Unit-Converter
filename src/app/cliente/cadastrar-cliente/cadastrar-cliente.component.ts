import { ClienteService } from './../../shared/services/cliente.service';
import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared/model/cliente';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css'],

})
export class CadastrarClienteComponent {
  cliente: Cliente;

  constructor(private ClienteService: ClienteService){
    this.cliente = new Cliente();
  }

  cadastrar(){
    this.ClienteService.adicionar(this.cliente);
    this.cliente = new Cliente();
  }
}
