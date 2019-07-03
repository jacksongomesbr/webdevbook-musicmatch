import { Injectable } from '@angular/core';
import { DadosBaseService } from '../dados-base/dados-base.service';
import { catchError } from 'rxjs/operators';

/**
 * O serviço `MusicasService` fornece uma especialização de [`DadosBaseService`]{@link DadosBaseService}
 * que lida com a entidade "música".
 */
@Injectable({
  providedIn: 'root'
})
export class MusicasService extends DadosBaseService {
  getApiUrl() {
    return super.getApiUrl().concat('musicas/');
  }

  /**
   * Este método faz uma requisição GET para a API, com o objetivo de obter
   * a lista das músicas do gênero identificador por `id`.
   * 
   * @param id O identificador do gênero
   */
  listaPorGenero(id) {
    const url = this.getApiUrl().concat(this.paramsToQuerystring({ genero: id }));
    return this.http.get(url);
  }

  listaPorArtista(id) {
    const url = this.getApiUrl()
      .concat(this.paramsToQuerystring({ artistas: id }));
    return this.http.get(url);
  }

  gostar(id) {
    return this.http.post(this.getApiUrl().concat(`${id}/gostar/`), {});
  }

  naoGostar(id) {
    return this.http.post(this.getApiUrl().concat(`${id}/nao_gostar/`), {});
  }

  cadastrar(titulo, generoId, artistasIds, letra, urlDoVideo) {
    const dados = {
      titulo,
      genero_id: generoId,
      artistas_ids: artistasIds,
      letra,
      url_do_video: urlDoVideo
    };
    return this.http.post(this.getApiUrl(), dados);
  }

  editar(id, titulo, generoId, artistasIds, letra, urlDoVideo) {
    const dados = {
      titulo,
      genero_id: generoId,
      artistas_ids: artistasIds,
      letra,
      url_do_video: urlDoVideo
    };
    return this.http.put(this.getApiUrl().concat(`${id}/`), dados);
  }
}
