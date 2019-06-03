import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNumber, isString, isObject } from 'util';
import { Genero } from './models/genero';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { DadosBaseService } from './dados-base.service';


@Injectable({
  providedIn: 'root'
})
export class GenerosService extends DadosBaseService {
  URL = 'assets/generos.json';


  /**
   * Faz uma requisição HTTP para o arquivo `generos.json`
   * para retornar um `Observable` com a lista
   * dos gêneros musicais
   */
  lista(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.URL)
      .pipe(
        tap(_ => console.log('buscou gêneros musicais')),
        catchError(this.handleError<Genero[]>('lista', []))
      );
  }

  /**
   * Faz uma requisição HTTP para o arquivo `generos.json`
   * utilizando o método []`lista()`]{@link GenerosService#lista}.
   * Ao obter retorno, aplica o operador `map` para transformar
   * o resultado em um objeto único (ao invés de retornar a lista).
   * 
   * @param genero o identificador ou o nome do gênero que será encontrado
   */
  encontrar(genero) {
    return this.lista()
      .pipe(
        map(generos => {
          if (isNumber(genero)) {
            return generos.find(g => g.id == genero);
          } else {
            return generos.find(g => g.nome == genero);
          }
        }),
        tap(_ => console.log(`buscou um gênero musical: ${genero}`))
      );
  }

  pesquisar(busca): Observable<Genero[]> {
    return this.lista().pipe(
      map(generos =>
        generos.filter(genero => genero.nome.toLowerCase().indexOf(busca) != -1)
      )
    );
  }

}
