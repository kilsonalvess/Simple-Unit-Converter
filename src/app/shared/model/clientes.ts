import { Cliente } from "./cliente"
import { Conta } from "./conta";

let conta1 = new Conta('conta1');

export const Clientes: Array<Cliente> = [
  {
    nome: 'Gabriel',
    cpf:'12310923',
    idade: 23,
    conta: conta1
  }
]
