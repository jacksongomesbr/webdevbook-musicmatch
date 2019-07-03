import { Injectable } from '@angular/core';
import { DadosBaseService } from '../dados-base/dados-base.service';

/**
 * A classe [`GenerosService`]{@link GenerosService} é uma especialização
 * de [`DadosBaseService`]{@link DadosBaseService} que fornece
 * serviços para acessar a API e tratar com dados da entidade "gênero".
 */
@Injectable({
  providedIn: 'root'
})
export class GenerosService extends DadosBaseService {
  getApiUrl() {
    return super.getApiUrl().concat('generos/');
  }

  cadastrar(nome) {
    return this.http.post(this.getApiUrl(), { nome });
  }

  editar(id, nome) {
    return this.http.patch(this.getApiUrl().concat(`${id}/`), { nome });
  }

}
