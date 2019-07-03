import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/**
 * A classe `LoginService` fornece um serviço que provê funcionalidades
 * de autenticação para o software. 
 * 
 * Este serviço faz requisições HTTP para a API para executar as funções
 * de entrar (login) e sair (logout). Neste caso, essas funções executam 
 * conforme o contexto da API, que está adotando o mecanismo de autenticação
 * por meio de "token" e do cabeçalho `Autorization`.
 * 
 * O token é obtido no login e é descartado no logout.
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /** A URL da API */
  API_ROOT = 'http://localhost:8000/api/';

  /**
   * O construtor injeta o `HttpClient`
   * 
   * @param http Serviço de requisições HTTP
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Este método recebe as credenciais do usuário (nome de usuário e senha)
   * e realiza uma requisição POST para a API, com o objetivo de obter
   * o "token" de autenticação (se for bem sucedida).
   * 
   * @param username Nome do usuário
   * @param password Senha do usuário
   */
  login(username, password) {
    const data = { username, password };
    return this.http.post(this.API_ROOT.concat('auth/login/'), data);
  }

  /**
   * Este método faz uma requisição POST para a API com o objetivo de
   * descartar o token.
   */
  logout() {
    return this.http.post(this.API_ROOT.concat('auth/logout/'), {});
  }
}
