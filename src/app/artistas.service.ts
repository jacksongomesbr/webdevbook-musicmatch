import { Injectable } from '@angular/core';
import { DadosBaseService } from './dados-base.service';
import { Observable } from 'rxjs';
import { Artista } from './models/artista';
import { catchError, tap, map, filter } from 'rxjs/operators';
import { isNumber } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService extends DadosBaseService {
  URL = 'assets/artistas.json';

  lista(): Observable<Artista[]> {
    return this.http.get<Artista[]>(this.URL)
      .pipe(
        tap(_ => console.log('buscou artistas')),
        catchError(this.handleError<Artista[]>('lista', []))
      );
  }

  encontrar(artista): Observable<Artista> {
    return this.lista().pipe(
      map(artistas => {
        if (isNumber(artista)) {
          return artistas.find(a => a.id === artista);
        } else {
          return artistas.find(a => a.nome === artista);
        }
      }),
      tap(_ => console.log(`buscou arista: ${artista}`))
    );
  }

}
