import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistasService } from '../../shared/services/artistas/artistas.service';
import { map, mergeAll } from 'rxjs/operators';
import { MusicasService } from 'src/app/shared/services/musicas/musicas.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista = null;

  constructor(private route: ActivatedRoute,
    private artistas$: ArtistasService,
    private musicas$: MusicasService) { }

  /**
   * Esta sobrescrita realiza as operações:
   * 
   * * acessa o `paramMap`
   * * obtém o valor do parâmetro `id` da rota
   * * converte o valor do parâmetro para string
   * * usa o serviço [`ArtistasService`]{@link ArtistasService} para encontrar o artista indicado
   * * avalia a saída (usando o operador `mergeAll`)
   */
  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      map((id: string) => parseInt(id)),
      map(id => this.artistas$.encontrar(id)),
      mergeAll(),
    ).subscribe(
      artista => {
        this.artista = artista;
        this.musicas$.listaPorArtista(this.artista.id)
          .subscribe(
            musicas => this.artista.musicas = musicas
          );
      }
    );
  }

}
