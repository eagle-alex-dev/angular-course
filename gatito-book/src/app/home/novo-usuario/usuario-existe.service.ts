import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    // criando uma validação de campo executável durante a digitação
    // existem 2 tipos de Observables aqui, o da digitação no formulário e o da requisição ao servidor
    // então temos que converter o observable da digitação em um observable de requisição
    return (control: AbstractControl) => {
      // operadores dos observables - ver curso de observables (rxjs) no alura
      return control.valueChanges.pipe(
        // switchMap troca o fluxo do observable -> verifica no servidor se usuário já existe
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        // o map pra trocar o resultado
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        // o first encerra o fluxo do observable
        first()
      );
    };
  }
}
