import { Router } from '@angular/router';
import { UsuarioService } from './../../authentication/usuario/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // convenção colocar o $ no final da variável pra indicar que é um Observable
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']); // retorna para o login, raiz
  }
}
