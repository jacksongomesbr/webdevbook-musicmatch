import { Component, OnInit } from '@angular/core';
import { ArtistasService } from '../../shared/services/artistas/artistas.service';
import { Router } from '@angular/router';

/**
 * O componente `ArtistaListaComponent` implementa funcionalidades de
 * gerenciamento de artistas:
 * 
 * * lista (consulta)
 * * exclusão (após confirmação do usuário)
 * * acesso à funcionalidade de edição (componente [`EditarArtistaComponent`]{@link EditarArtistaComponent})
 */
@Component({
  selector: 'app-artista-lista',
  templateUrl: './artista-lista.component.html',
  styleUrls: ['./artista-lista.component.css']
})
export class ArtistaListaComponent implements OnInit {
  /** A lista de artistas */
  artistas = null;
  offset = 0;
  count = null;
  limit = 10;

  /** Uma variável de controle sobre o resultado da exclusão de artista */
  resultadoExcluir = null;

  /**
   * O construtor injeta uma instância de `ArtistasService` e `Router`
   * 
   * @param artistas$ Uma instância de `ArtistasService`
   * @param router Uma instância de `Router`
   */
  constructor(private artistas$: ArtistasService, private router: Router) { }

  /**
   * É sobrecarregado para acessar a lista de artistas quando o componente for iniciado.
   */
  ngOnInit() {
    this.atualizarLista();
  }

  /**
   * Este método usa o serviço `ArtistasService` para obter a lista de artistas. 
   * Quando houver retorno, armazena o resultado no atributo `artistas`.
   */
  atualizarLista() {
    this.artistas$.lista(this.limit, this.offset)
      .subscribe(
        lista => {
          this.artistas = lista.results;
          this.count = lista.count;
        }
      );
  }

  pageChanged(event: any): void {
    this.offset = (event.page - 1) * this.limit;
    this.atualizarLista();
  }

  /**
   * Este método exclui um artista, de acordo com confirmação do usuário. Ao excluir, atualiza a lista de artistas.
   * 
   * @param artista O artista que será excluído
   */
  excluir(artista) {
    if (confirm(`Tem certeza que deseja excluir o artista "${artista.nome}" ?\nEssa ação não é reversível!`)) {
      this.artistas$.excluir(artista.id)
        .subscribe(
          _ => {
            this.resultadoExcluir = true;
            this.atualizarLista();
          },
          err => {
            this.resultadoExcluir = err.error;
          }
        )
    }
  }

  /**
   * Este método realiza navegação para a funcionalidade de edição do artista.
   * 
   * @param artista O artista que será editado
   */
  editar(artista) {
    this.router.navigate(['admin', 'artistas', artista.id]);
  }

}
