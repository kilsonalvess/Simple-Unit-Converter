import { Component } from '@angular/core';
import { Informacoes } from 'src/app/shared/model/cliente';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css'],

})
export class CadastrarInformacoesComponent {
  cliente: Informacoes;

  constructor(){
    this.cliente = new Informacoes();
  }

  cadastrar(){
    //alert('Informacoes cadastrado com sucesso');
    this.cliente = new Informacoes();
  }
}
