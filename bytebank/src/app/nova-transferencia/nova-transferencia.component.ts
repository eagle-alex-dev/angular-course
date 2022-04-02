import { Transferencia } from '@models/transferencia.model';
import { TransferenciaService } from '@services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Nova transferência solicitada.');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.transferenciaService.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        // this.limparCampos();
        this.router.navigateByUrl('extrato'); // redireciona a página para a rota especificada ('extrato')
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
