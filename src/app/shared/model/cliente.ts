import { Conta } from "./conta";

export class Informacoes {
  private static numeroConta: number = 1;

  public conta: Conta;

  constructor(
    public nome: string = '',
    public cpf: string = '',
    public idade?: number
  ) {

    this.conta = new Conta(123, Informacoes.numeroConta, 0);
    Informacoes.numeroConta++;
  }
}
