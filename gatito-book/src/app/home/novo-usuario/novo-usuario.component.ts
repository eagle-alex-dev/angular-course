import { Router } from '@angular/router';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup; // usado por causa do ReactiveForms

  constructor(
    private formBuilder: FormBuilder, // usado por causa do ReactiveForms
    private usuarioExisteService: UsuarioExisteService,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        // cria a variável que carrega os campos do formulário
        email: [
          '',
          [
            // validações padrão do Angular
            Validators.required,
            Validators.email,
          ],
        ],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        // validação customizada (minusculo) e validação assíncrona (usuarioExistente)
        userName: [
          '',
          [minusculoValidator],
          [this.usuarioExisteService.usuarioJaExiste()],
        ],
        password: [''],
      },
      {
        // essa validação compara 2 inputs diferentes no formulário e por isso precisa ficar
        // separada nesse parâmetro "validators"
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      // guarda os valores dos campos do formulário na variável
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
