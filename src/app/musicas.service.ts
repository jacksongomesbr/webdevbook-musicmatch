import { Injectable } from '@angular/core';
import { DadosBaseService } from './dados-base.service';
import { Observable, concat, forkJoin, from, of } from 'rxjs';
import { Musica } from './models/musica';
import { tap, catchError, map, flatMap, switchMap, mergeAll, zipAll, merge } from 'rxjs/operators';
import { isNumber } from 'util';
import { GenerosService } from './generos.service';
import { ArtistasService } from './artistas.service';
import { HttpClient } from '@angular/common/http';
import { Artista } from './models/artista';
import { Genero } from './models/genero';

@Injectable({
  providedIn: 'root'
})
export class MusicasService extends DadosBaseService {
  URL = 'assets/musicas.json';

  lista(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.URL)
      .pipe(
        tap(_ => console.log('buscou músicas')),
        catchError(this.handleError<Musica[]>('lista', []))
      );
  }

  listaPorGenero(genero: Genero): Observable<Musica[]> {
    return this.lista().pipe(
      map(musicas => {
        return musicas.filter(musica => musica.genero.id === genero.id);
      }),
      tap(_ => console.log(`buscou músicas do gênero musical: ${genero.id}`))
    );
  }

  listaPorArtista(artista: Artista): Observable<Musica[]> {
    return this.lista().pipe(
      map(musicas => musicas.filter(musica => {
        let artistas = [];
        for (const artista of musica.artistas) {
          artistas.push(artista.id);
        }
        return artistas.indexOf(artista.id) != -1;
      })),
      tap(_ => console.log(`buscou músicas do artista: ${artista.id}`))
    );
  }

  listaRelacionadas(musica): Observable<Musica[]> {
    return this.lista()
      .pipe(
        map(musicas => {
          let items = [];
          if (musica.gostar === 1) {
            // obtém as mesmas músicas do gênero da atual
            items = musicas.filter(m => m.genero.id === musica.genero.id && m.id !== musica.id);
            // obtém as músicas dos mesmos artistas da atual
            for (let artista of musica.artistas) {
              for (let am of musicas.filter(m => m.artistas.indexOf(artista) !== -1 && m.id !== musica.id)) {
                if (items.indexOf(am) === -1) {
                  items.push(am);
                }
              }
            }
          } else if (musica.naoGostar === 1) {
            // obtém as músicas que não sejam mesmo gênero da música atual
            items = musicas.filter(m => m.genero.id !== musica.genero.id);

            // obtém as músicas que não sejam dos mesmos artistas da música atual
            // obtém todos os artistas que não sejam aqueles da música atual
            const artistas = [];
            for (let m of musicas) {
              const ar = m.artistas.filter(a => musica.artistas.indexOf(a) === -1)
              for (const a in ar) {
                if (artistas.indexOf(a) === -1) {
                  artistas.push(a);
                }
              }
            }

            // obtém as músicas desses artistas
            for (const artista of artistas) {
              const ms = musicas.filter(m => m.artistas.indexOf(artista) !== -1 && m.id !== musica.id);
              for (const m of ms) {
                if (items.indexOf(m) === -1) {
                  items.push(m);
                }
              }
            }
          }
          return items;
        })
      );
  }

  encontrar(musica): Observable<Musica> {
    return this.lista().pipe(
      map((musicas: Musica[]) => {
        if (isNumber(musica)) {
          return musicas.find(m => m.id === musica);
        } else {
          return musicas.find(m => m.titulo === musica);
        }
      }),
      tap(_ => console.log(`buscou a música: ${musica}`))
    );
  }

  private listaDeMusicasDoArtista(artista) {

  }
}
