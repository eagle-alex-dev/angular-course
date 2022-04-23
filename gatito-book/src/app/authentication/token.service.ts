import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  retornaToken() {
    return localStorage.getItem(KEY) ?? ''; // ?? nullish coalescing operator, return right if left is null
  }

  salvaToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  excluiToken() {
    localStorage.removeItem(KEY);
  }

  possuiToken() {
    return !!this.retornaToken(); // return true/false if function returns true/false
  }
}
