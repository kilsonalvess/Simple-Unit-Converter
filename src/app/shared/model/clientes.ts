import { Informacoes } from "./cliente"
import { Conta } from "./conta";

let conta1 = new Conta('conta1');

export const Informacoess: Array<Informacoes> = [
  {
    nome: 'Gabriel',
    cpf:'12310923',
    idade: 23,
    conta: conta1
  }
]
