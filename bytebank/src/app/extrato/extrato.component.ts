import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() transferencia: any; // recebe o valor que foi exportado da classe nova-transferência para esta classe

  constructor() {}

  ngOnInit(): void {}
}
