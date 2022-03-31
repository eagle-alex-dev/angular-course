import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  // esse evento veio da classe nova-transferência e foi invocado no app-component HTML
  transferir($event) {
    console.log($event);
    this.transferencia = $event; // associa o evento recebido a variável e repassa pro outro componente HTML
  }
}
