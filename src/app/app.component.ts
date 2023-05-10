import { Component } from '@angular/core';
import {Cliente} from "./shared/model/Cliente";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple-Unit-Conversor';


  cliente: Cliente;
  clientes: Array<Cliente>;

  constructor() {
    this.cliente = new Cliente();
    this.clientes = new Array<Cliente>();
    console.log (this.cliente);
  }
}




