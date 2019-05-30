import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  musica = null;
  relacionadas = null;

  constructor(private disco: DiscoService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Perceba a utilização de outra abordagem para obter o valor do parâmetro de rota:
    // utilizar o atributo paramMap e o método subscribe()
    // Isso é necessário porque, ao apresentar a lista das músicas relacionadas
    // o link para cada música não funciona porque a URL é a mesma do caminho de rota
    // da música atual, apenas o valor do parâmetro. 
    // A abordagem de usar o atributo snapshot
    // só funciona se a URL combinar com um caminho de rota diferente.
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.musica = this.disco.encontrarMusica(parseInt(id));
      this.disco.preencherObjetoMusica(this.musica);
      this.relacionadas = this.disco.listaDeMusicasRelacionadas(this.musica);
    });
  }

  gostar() {
    this.disco.gostar(this.musica);
    this.relacionadas = this.disco.listaDeMusicasRelacionadas(this.musica);
  }

  naoGostar() {
    this.disco.naoGostar(this.musica);
    this.relacionadas = this.disco.listaDeMusicasRelacionadas(this.musica);
  }

}
