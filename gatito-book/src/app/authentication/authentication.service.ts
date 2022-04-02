import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private url = 'http://localhost:3000/user/login';

  constructor(private httpClient: HttpClient) {}

  authenticate(usuario: string, senha: string): Observable<any> {
    return this.httpClient.post(this.url, {
      userName: usuario,
      password: senha,
    });
  }
}
