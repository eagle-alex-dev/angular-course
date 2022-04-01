import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '@models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    // Observable indica que o método é async (promise). Usamos para nos inscrever e escutar quando chega o resultado
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  // esse evento foi invocado pela classe app-component
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.customizar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia); // adiciona novas linhas ao extrato
  }

  private customizar(transferencia: any) {
    transferencia.data = new Date(); // cria e adiciona uma nova propriedade (data) no objeto transferencia
  }
}
