import { Injectable } from '@angular/core';
import { DadosBaseService } from '../dados-base/dados-base.service';
import { catchError } from 'rxjs/operators';

/**
 * O serviço `ArtistasService` interage com a API para fornecer
 * recursos de CRUD para a entidade "Artista".
 */
@Injectable({
  providedIn: 'root'
})
export class ArtistasService extends DadosBaseService {
  getApiUrl() {
    return super.getApiUrl().concat('artistas/');
  }

  /**
   * Este método realiza uma requisição POST à API com o objetivo de
   * cadastrar um artista.
   * 
   * Além de receber o nome do artista, o método também recebe o arquivo
   * da foto do artista. 
   * 
   * A interação com a API formata os dados para o corpo da requisição
   * POST conter o nome e os bytes do arquivo de imagem que representa 
   * a foto. Esse processo utiliza o objeto `FormData` (disponível no
   * navegador) para, de forma mais conhecida, permitir o "upload"
   * do arquivo. 
   * 
   * É importante notar que o upload é obtido com a formatação do
   * corpo da requisição HTTP. Detalhes sobre o upload (sobre como
   * a API procede ao receber os dados) estão reservados exclusivamente
   * para a própria API.
   * 
   * @param nome O nome do artista
   * @param foto A foto do artista (o arquivo de imagem)
   */
  cadastrar(nome, foto?) {
    let formData: FormData = new FormData();
    formData.append('nome', nome);
    if (foto) {
      formData.append('foto', foto, foto.name);
    }
    return this.http.post(this.getApiUrl(), formData);
  }

  /**
   * Este método atualiza as informações do artista, operando de forma
   * semelhante ao método `cadastrar()`, com a diferença de realizar
   * uma requisição PATCH para a API.
   * 
   * @param id O identificador do artista
   * @param nome O nome do artista
   * @param foto A foto do artista (o arquivo de imagem)
   */
  editar(id, nome, foto?) {
    let formData: FormData = new FormData();
    formData.append('nome', nome);
    if (foto) {
      formData.append('foto', foto, foto.name);
    }
    return this.http.patch(this.getApiUrl().concat(`${id}/`), formData);
  }

  removerFoto(id) {
    return this.http.post(this.getApiUrl().concat(`${id}/remover_foto/`), {});
  }
}
