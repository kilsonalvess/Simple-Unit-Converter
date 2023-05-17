import { Conta } from "./conta";

export class Cliente {
  private static numeroConta: number = 1;

  public conta: Conta;

  constructor(
    public nome: string = '',
    public cpf: string = '',
    public idade?: number
  ) {

    this.conta = new Conta(123, Cliente.numeroConta, 0);
    Cliente.numeroConta++;
  }
}
