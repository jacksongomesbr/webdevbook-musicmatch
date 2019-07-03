import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../../shared/services/musicas/musicas.service';
import { ValidacaoFormUtilService } from 'src/app/shared/services/validacao/validacao-form-util.service';
import { GenerosService } from '../../shared/services/generos/generos.service';
import { ArtistasService } from '../../shared/services/artistas/artistas.service';

@Component({
  selector: 'app-musica-cadastrar',
  templateUrl: './musica-cadastrar.component.html',
  styleUrls: ['./musica-cadastrar.component.css']
})
export class MusicaCadastrarComponent implements OnInit {
  titulo = null;
  letra = null;
  genero = null;
  artistas_selecionados = null;
  urlDoVideo = null;
  generos = [];
  artistas = [];

  constructor(private musicas$: MusicasService,
    private generos$: GenerosService,
    private artistas$: ArtistasService,
    private validacao$: ValidacaoFormUtilService) { }

  ngOnInit() {
    this.validacao$.erro = null;
    this.generos$.lista()
      .subscribe(
        lista => this.generos = lista
      );
    this.artistas$.lista()
      .subscribe(
        lista => this.artistas = lista
      );
  }

  salvar() {
    this.musicas$.cadastrar(this.titulo, this.genero, this.artistas_selecionados, this.letra, this.urlDoVideo)
      .subscribe(
        musica => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      )
  }

}
