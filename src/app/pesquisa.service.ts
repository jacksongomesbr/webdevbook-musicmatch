import { Injectable } from '@angular/core';
import { DadosBaseService } from './dados-base.service';
import { tap, catchError, map } from 'rxjs/operators';

/**
 * O serviço `PesquisaService` fornece uma especialização do [`DadosBaseService`]{@link DadosBaseService}
 * que dá acesso à funcionalidade de pesquisa da API.
 */
@Injectable({
  providedIn: 'root'
})
export class PesquisaService extends DadosBaseService {
  /** A URL da API */
  URL = 'http://localhost:8000/api/pesquisa/';

  /**
   * Este método faz uma requisição GET para a API, com o objetivo
   * de obter resultados que indiquem músicas, artistas e gêneros
   * que combinam com o critério de busca.
   * 
   * @param busca O parâmetro para a pesquisa
   */
  lista(busca) {
    return this.http.get(this.URL.concat(`?search=${busca}`))
      .pipe(
        catchError(this.handleError<any>('lista', []))
      );
  }

}
