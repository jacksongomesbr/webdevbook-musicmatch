import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../musicas.service';
import { take, skip, map } from 'rxjs/operators';
import { ArtistasService } from '../artistas.service';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  musicas = null;
  artistas = null;
  generos = null;

  constructor(private musicas$: MusicasService, private artistas$: ArtistasService, private generos$: GenerosService) { }

  ngOnInit() {
    this.musicas$.lista()
      .pipe(
        map(musicas => musicas.slice(0, 4))
      )
      .subscribe(musicas => this.musicas = musicas);

    this.artistas$.lista()
      .pipe(
        map(artistas => artistas.slice(0, 4))
      )
      .subscribe(artistas => this.artistas = artistas);

    this.generos$.lista()
      .pipe(
        map(generos => generos.slice(0, 4))
      )
      .subscribe(generos => this.generos = generos);

  }

}
