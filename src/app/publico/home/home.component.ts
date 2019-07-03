import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../../shared/services/musicas/musicas.service';
import { ArtistasService } from '../../shared/services/artistas/artistas.service';
import { GenerosService } from '../../shared/services/generos/generos.service';

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
    this.musicas$.lista(5)
      .subscribe(data => this.musicas = data.results);

    this.artistas$.lista(5)
      .subscribe(data => this.artistas = data.results);

    this.generos$.lista(5)
      .subscribe(data => this.generos = data.results);

  }

}
