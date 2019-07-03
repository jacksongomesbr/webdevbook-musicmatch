import { Component, OnInit } from '@angular/core';
import { GenerosService } from 'src/app/shared/services/generos/generos.service';
import { ActivatedRoute } from '@angular/router';
import { ValidacaoFormUtilService } from 'src/app/shared/services/validacao/validacao-form-util.service';
import { MusicasService } from 'src/app/shared/services/musicas/musicas.service';
import { ArtistasService } from 'src/app/shared/services/artistas/artistas.service';

@Component({
  selector: 'app-musica-editar',
  templateUrl: './musica-editar.component.html',
  styleUrls: ['./musica-editar.component.css']
})
export class MusicaEditarComponent implements OnInit {
  musica = null;
  generos = null;
  artistas = null;
  artistas_selecionados = [];

  constructor(private generos$: GenerosService,
    private musicas$: MusicasService,
    private artistas$: ArtistasService,
    private route: ActivatedRoute,
    private validacao$: ValidacaoFormUtilService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = parseInt(params.get('id'));
        this.validacao$.erro = null;
        this.musicas$.encontrar(id)
          .subscribe(
            (musica: any) => {
              this.musica = musica;
              for (const artista of musica.artistas) {
                this.artistas_selecionados.push(artista.id);
              }
            }
          );
        this.generos$.lista()
          .subscribe(
            generos => this.generos = generos
          );
        this.artistas$.lista()
          .subscribe(
            artistas => this.artistas = artistas
          );
      }
    );
  }

  salvar() {
    this.musicas$.editar(this.musica.id, this.musica.titulo, this.musica.genero.id,
      this.artistas_selecionados, this.musica.letra, this.musica.url_do_video)
      .subscribe(
        musica => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }

}
