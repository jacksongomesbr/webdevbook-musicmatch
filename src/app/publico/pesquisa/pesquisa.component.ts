import { Component, OnInit } from '@angular/core';
import { PesquisaService } from '../../shared/services/pesquisa/pesquisa.service';

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
    this.pesquisa$.lista(this.busca)
      .subscribe(
        (data: any) => this.lista = data.results
      );
  }

}
