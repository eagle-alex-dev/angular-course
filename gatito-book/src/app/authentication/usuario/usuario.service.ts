import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  /*
  Toda vez que algum componente, algum outro serviço faz um subscribe nesse observable, esse BehaviorSubject envia o último dado que estava nele, ou seja, ele é um observable que guarda estado.
  */
  private usuarioSubject = new BehaviorSubject<Usuario>({}); // objecto observable de 2 vias para enviar e receber informação

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      // caso já exista um token salvo em utilização, ou seja, já exista um usuário
      this.decodificaJWT(); // avisa todo mundo
    }
  }

  // decodificar a informação recebida para o objecto de usuário
  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario); // passa as últimas informações de usuário pra todo mundo q se inscreveu no serviço
  }

  retornaUsuario() {
    // retorna o subject com observable para que os métodos externos ao meu serviço não consigam manipular informações
    // o observable é somente leitura
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT(); // decodifica o token e notifica todo mundo que tem um novo token, novo usuário
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({}); // notifica todo mundo que não existe nenhum usuário
  }

  estaLogado() {
    return this.tokenService.possuiToken(); // retorna se existe um token ativo
  }
}
