import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { DadosBaseService } from './dados-base.service';

/**
 * A classe [`GenerosService`]{@link GenerosService} é uma especialização
 * de [`DadosBaseService`]{@link DadosBaseService} que fornece
 * serviços para acessar a API e tratar com dados da entidade "gênero".
 */
@Injectable({
  providedIn: 'root'
})
export class GenerosService extends DadosBaseService {
  /** A URL da API */
  URL = 'http://localhost:8000/api/generos/';


  /**
   * Este método faz uma requisição GET para a API, com o objetivo
   * de obter a lista dos gêneros.
   */
  lista() {
    return this.http.get(this.URL)
      .pipe(
        catchError(this.handleError<any>('lista', []))
      );
  }

  /**
   * Faz uma requisição GET para a API, com o objetivo de obter os
   * dados de um gênero (identificado por `id`).
   * 
   * @param genero o identificador do gênero 
   */
  encontrar(id) {
    return this.http.get(this.URL.concat(`${id}/`));
  }


}
