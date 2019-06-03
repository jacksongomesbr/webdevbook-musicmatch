import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosBaseService {

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
}
