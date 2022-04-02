import { Observable } from 'rxjs';
import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  login() {
    this.authService.authenticate(this.usuario, this.senha).subscribe({
      next: () => {
        console.log(`Usuário ${this.usuario} autenticado com sucesso.`);
      },
      error: (error) => {
        alert('Usuário ou senha inválida');
        console.log(error);
      },
    });
  }
}
