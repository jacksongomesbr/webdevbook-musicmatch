import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { concat } from 'rxjs';
import { Genero } from '../models/genero';
import { PesquisaService } from '../pesquisa.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  lista = null;
  busca = null;

  constructor(private pesquisa$: PesquisaService) { }

  ngOnInit() {

  }

  pesquisar() {
    this.pesquisa$.listaPorBusca(this.busca)
      .subscribe(
        resultado => this.lista = resultado
      );
  }

  getRouterLink(item) {
    if (item.tipo === 'música') {
      return ['/musicas', item.id];
    } else if (item.tipo === 'gênero') {
      return ['/generos', item.id];
    } else {
      return ['/artistas', item.id];
    }
  }
}
