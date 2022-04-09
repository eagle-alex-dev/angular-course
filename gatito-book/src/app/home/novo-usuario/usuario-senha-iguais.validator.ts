import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    // se os dois forem vazios retorna null
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
