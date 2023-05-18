import { Component } from '@angular/core';
import { Clientes } from 'src/app/shared/model/clientes';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent {
  clientes = Clientes;
  constructor(){
  }
}
