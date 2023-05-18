import { Injectable } from '@angular/core';
import { Clientes } from './../model/clientes';
import { Cliente } from './../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[];

  constructor() {
    this.clientes = Clientes;
  }

  adicionar(cliente: Cliente): void {
    this.clientes.push(cliente);
    console.log(this.clientes);
  }

  listar(): Cliente[] {
    return this.clientes;
  }
}
