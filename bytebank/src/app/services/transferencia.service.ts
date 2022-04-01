import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  // esse evento foi invocado pela classe app-component
  adicionar(transferencia: any) {
    this.customizar(transferencia);
    // associa o evento recebido a variável e repassa pro outro componente HTML
    this.listaTransferencia.push(transferencia); // adiciona novas linhas ao extrato
  }

  private customizar(transferencia: any) {
    transferencia.data = new Date(); // cria e adiciona uma nova propriedade (data) no objeto transferencia
  }
}
