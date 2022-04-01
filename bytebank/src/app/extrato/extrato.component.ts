import { TransferenciaService } from '@services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from '@models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[]; // recebe o valor que foi exportado da classe nova-transferência para esta classe

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    // this.transferencias = this.transferenciaService.transferencias;
    this.transferenciaService
      .todas()
      .subscribe((transferencias: Transferencia[]) => {
        // subscribe indica minha inscrição no serviço pra escutar a resposta do get
        console.table(transferencias);
        this.transferencias = transferencias; // recebe a resposta do get e joga na propriedade do component (classe)
      });
  }
}
