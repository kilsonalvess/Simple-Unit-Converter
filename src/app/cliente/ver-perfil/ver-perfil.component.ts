import { ClienteService } from './../../shared/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/shared/model/clientes';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {
  clientes = Clientes;

  constructor(private clienteService: ClienteService){
  }

  ngOnInit(): void {
    this.clientes = this.clienteService.listar();
  }
}
