import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

/**
 * A classe `DadosBaseService` fornece uma classe genérica para
 * serviços que utilizam o `HttpClient` para fazer requisições
 * HTTP a uma API.
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class DadosBaseService {
  protected API_URL = 'http://localhost:8000/api/';

  /**
   * O construtor injeta uma instância do serviço `HttpClient`.
   * 
   * @param http O serviço `HttpClient`
   */
  constructor(protected http: HttpClient) { }

  /**
   * Trata a operação que falhou. 
   * Deixa que o aplicativo continue sua execução.
   * 
   * @param operation - nome da operação que falhou
   * @param result - valor opcional para ser retornado quando houver falha
   */
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getApiUrl() {
    return this.API_URL;
  }

  lista(limit = null, offset = null) {
    let url = this.getApiUrl();
    url = url.concat(this.paramsToQuerystring({ limit, offset }));
    return this.http.get(url)
      .pipe(
        catchError(this.handleError<any>('lista', []))
      );
  }

  encontrar(id) {
    return this.http.get(this.getApiUrl().concat(`${id}/`));
  }

  excluir(id) {
    return this.http.delete(this.getApiUrl().concat(`${id}/`));
  }

  paramsToQuerystring(o) {
    let s = [];
    for (let p in o) {
      let v = o[p];
      if (!v) {
        v = '';
      }
      if (Array.isArray(v)) {
        for(const e in v) {
          s.push(`${p}=${e}`);
        }
      } else {
        s.push(`${p}=${v}`);
      }
    }
    return '?'.concat(s.join('&'));
  }
}
