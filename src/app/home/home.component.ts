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
      .subscribe(data => this.musicas = data.results);

    this.artistas$.lista()
      .subscribe(data => this.artistas = data.results);

    this.generos$.lista()
      .subscribe(data => this.generos = data.results);

  }

}
