import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  // criando um objecto tipo Event que será exportado para outro componente
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor() {}

  ngOnInit(): void {}

  transferir() {
    console.log('Nova transferência solicitada.');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir); // emite o evento, esse evento será propagado no componente HTML

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
