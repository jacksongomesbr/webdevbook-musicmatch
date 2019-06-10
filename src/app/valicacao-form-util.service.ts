import { Injectable } from '@angular/core';

/**
 * O serviço `ValidacaoFormUtilService` fornece funcionalidades úteis para
 * formulários no sentido de facilitar a implementação de recursos
 * de validação de campos.
 */
@Injectable({
  providedIn: 'root'
})
export class ValicacaoFormUtilService {
  /** Atributo que armazena os erros */
  erro = null;

  constructor() { }

  /**
   * Verifica se existe um erro para o campo.
   * 
   * @param campo O nome do campo
   */
  temErro(campo) {
    return (this.erro != null && this.erro[campo]);
  }

  /**
   * Retorna o texto do erro para o campo.
   * 
   * @param campo O nome do campo
   */
  textoErro(campo) {
    return String(this.erro[campo]);
  }

  /**
   * Verifica se o campo está inválido.
   * 
   * @param campo O campo (objeto do `ngForm`)
   */
  campoInvalido(campo) {
    return campo.invalid && (campo.dirty || campo.touched);
  }

}
