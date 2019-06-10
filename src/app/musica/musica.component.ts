import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MusicasService } from '../musicas.service';
import { Musica } from '../models/musica';
import { GenerosService } from '../generos.service';
import { forkJoin, Observable, of, from, zip } from 'rxjs';
import { map, tap, switchMap, single, first, mergeAll, concatAll, zipAll, delay, share } from 'rxjs/operators';
import { ArtistasService } from '../artistas.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  musica = null;
  relacionadas = null;

  constructor(private route: ActivatedRoute, private musicas$: MusicasService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.relacionadas = null;
        const id = params.get('id');
        this.musicas$.encontrar(parseInt(id))
          .subscribe(musica => this.musica = musica);
      });

    // this.route.paramMap.pipe(
    //   map(params => params.get('id')),
    //   map((id: string) => parseInt(id)),
    //   map(id => this.musicas$.encontrar(id)),
    //   mergeAll(),
    // ).subscribe(
    //   musica => this.musica = musica
    // );
  }

  gostar() {
    this.musica.gostar = 1;
    this.musica.naoGostar = 0;
    this.atualizarListaDeRelacionadas();
  }

  naoGostar() {
    this.musica.gostar = 0;
    this.musica.naoGostar = 1;
    this.atualizarListaDeRelacionadas();
  }

  atualizarListaDeRelacionadas() {
    // this.musicas$.listaRelacionadas(this.musica)
    //   .subscribe(musicas => this.relacionadas = musicas);
  }

}
