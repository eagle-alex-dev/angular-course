import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[]; // recebe o valor que foi exportado da classe nova-transferência para esta classe

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.transferencias = this.transferenciaService.transferencias;
  }
}
