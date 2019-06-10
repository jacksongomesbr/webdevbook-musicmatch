import { Injectable } from '@angular/core';
import { DadosBaseService } from './dados-base.service';
import { catchError } from 'rxjs/operators';

/**
 * O serviço `MusicasService` fornece uma especialização de [`DadosBaseService`]{@link DadosBaseService}
 * que lida com a entidade "música".
 */
@Injectable({
  providedIn: 'root'
})
export class MusicasService extends DadosBaseService {
  /** A URL da API */
  URL = 'http://localhost:8000/api/musicas/';

  /**
   * Este método faz uma requisição GET para a API, com o objetivo de obter
   * a lista das músicas.
   */
  lista() {
    return this.http.get(this.URL)
      .pipe(
        catchError(this.handleError<any>('lista', []))
      );
  }

  /**
   * Este método faz uma requisição GET para a API, com o objetivo de obter
   * as informações de uma música, identificada por `id`.
   * 
   * @param id O identificador da música
   */
  encontrar(id) {
    return this.http.get(this.URL.concat(`${id}/`));
  }

  /**
   * Este método faz uma requisição GET para a API, com o objetivo de obter
   * a lista das músicas do gênero identificador por `id`.
   * 
   * @param id O identificador do gênero
   */
  listaPorGenero(id) {
    return this.http.get(this.URL.concat(`?genero=${id}`));
  }

}
