import { Injectable } from '@angular/core';
import { DadosBaseService } from './dados-base.service';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService extends DadosBaseService {
  URL = 'assets/indice.json';

  lista() {
    return this.http.get<any[]>(this.URL)
      .pipe(
        tap(_ => console.log('pesquisou o índice')),
        catchError(this.handleError<any[]>('lista', []))
      );
  }

  listaPorBusca(busca) {
    return this.lista()
      .pipe(
        map(lista => lista.filter(item => {
          if (item.tipo === 'música') {
            return item.titulo.toLowerCase().indexOf(busca) != -1;
          } else {
            return item.nome.toLowerCase().indexOf(busca) != -1;
          }
        })
        ),
        tap(_ => console.log(`pesquisando o índice por: ${busca}`))
      );
  }
}
