import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private url = 'http://localhost:3000/user/login';

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  // o tipo da resposta Observable<HttpResponse<any>> é porque agora eu quero pegar a requisição inteira,
  // e não somente o body, que é o padrão do Angular
  authenticate(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        this.url,
        {
          userName: usuario,
          password: senha,
        },
        { observe: 'response' } // pega toda a informação da requisição - body e header
      )
      .pipe(
        // indica q toda vez q houver o post, eu quero fazer uma operação - "salvar o token"
        tap((res) => {
          // tap é a função que é usada quando não me interessa a resposta da operação que eu vou executar
          const authToken = res.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken); // salva o token no nosso localStorage (usuarioSubject)
        })
      );
  }
}
