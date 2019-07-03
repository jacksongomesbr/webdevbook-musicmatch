import { Injectable } from '@angular/core';
import { DadosBaseService } from '../../shared/services/dados-base/dados-base.service';

@Injectable({
  providedIn: 'root'
})
export class EstatisticasService extends DadosBaseService {

  API_URL = 'http://localhost:8000/api/estatisticas/';

  get() {
    return this.http.get(this.API_URL);
  }
}
