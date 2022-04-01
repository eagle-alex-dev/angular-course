import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferenciaService: TransferenciaService) {}

  // esse evento veio da classe nova-transferência e foi invocado no app-component-html
  transferir($event) {
    this.transferenciaService.adicionar($event);
  }
}
