import { Component } from '@angular/core';
import {Cliente} from '../../shared/modelo/cliente';
import {CLIENTES} from '../../shared/modelo/CLIENTES';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mantem-cliente',
  templateUrl: './mantem-cliente.component.html',
  styleUrls: ['./mantem-cliente.component.css']
})
export class MantemClienteComponent {

  clienteDeManutencao: Cliente;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  clientes = CLIENTES;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.clienteDeManutencao = new Cliente('', 0);
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const clienteEncontrado = this.clientes.find(
        cliente => cliente.cpf === idParaEdicao);
      if (clienteEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.clienteDeManutencao = clienteEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.clienteDeManutencao) {
      this.clientes.push(this.clienteDeManutencao);
    }
    this.clienteDeManutencao = new Cliente();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemclientes']);
  }

}
