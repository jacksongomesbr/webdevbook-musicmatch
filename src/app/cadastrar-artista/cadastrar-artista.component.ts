import { Component, OnInit } from '@angular/core';
import { ArtistasService } from '../artistas.service';
import { ValicacaoFormUtilService } from '../valicacao-form-util.service';

/**
 * O componente `CadastrarArtistaComponent` implementa a funcionalidade de cadastrar
 * artista. Para isso, utiliza o serviço [`ArtistasService`]{@link ArtistasService}.
 * 
 * @see ArtistasService
 * @see ValicacaoFormUtilService
 */
@Component({
  selector: 'app-cadastrar-artista',
  templateUrl: './cadastrar-artista.component.html',
  styleUrls: ['./cadastrar-artista.component.css']
})
export class CadastrarArtistaComponent implements OnInit {
  /** Atributo vinculado ao campo do nome do artista */
  nome = null;

  /** Atributo vinculado ao campo da foto do artista */
  foto = null;

  /**
   * O construtor inje ainstâncias de `ArtistasService` e `ValidacacaoFormUtilService`
   * 
   * @param artistas$ Uma instância de ArtistasService
   * @param validacao$ Uma instancia de ValidacacaoFormUtilService
   */
  constructor(private artistas$: ArtistasService,
    private validacao$: ValicacaoFormUtilService) { }

  ngOnInit() {
  }

  /**
   * Este método utiliza o método [`cadastrar()`]{@link ArtistasService#cadastrar}
   * para cadastrar um artista, utilizando os atributos `nome` e `foto`.
   * 
   * Quando obtiver um resultado do método, faz um tratamento para lidar com situação
   * de erro ou sucesso.
   */
  salvar() {
    this.artistas$.cadastrar(this.nome, this.foto)
      .subscribe(
        data => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }

  /**
   * Este método é utilizado como tratador para o evento `change` do campo
   * foto. Quando o usuário selecionar um arquivo, este método será chamado
   * para obter o primeiro arquivo da lista (parâmetro `files`) e utilizá-lo
   * como a foto do artista.
   * 
   * @param files Lista de arquivos
   */
  onChangeFoto(files: FileList) {
    const fileItem = files.item(0);
    this.foto = fileItem;
  }

}
