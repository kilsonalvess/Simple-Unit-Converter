import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared/model/cliente';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css'],

})
export class CadastrarClienteComponent {
  cliente: Cliente;

  constructor(){
    this.cliente = new Cliente();
  }

  cadastrar(){
    //alert('Cliente cadastrado com sucesso');
    this.cliente = new Cliente();
  }
}
