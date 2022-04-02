import { Observable } from 'rxjs';
import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  login() {
    this.authService.authenticate(this.usuario, this.senha).subscribe({
      next: () => {
        console.log(`Usuário ${this.usuario} autenticado com sucesso.`);
        this.router.navigate(['animals']);
      },
      error: (error) => {
        alert('Usuário ou senha inválida');
        console.log(error);
      },
    });
  }
}
