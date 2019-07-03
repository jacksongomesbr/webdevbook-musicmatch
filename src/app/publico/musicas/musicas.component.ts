import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../../shared/services/generos/generos.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {
  generos = [];

  constructor(private generos$: GenerosService) { }

  ngOnInit() {
    this.generos$.lista(10, 0)
      .subscribe(
        lista => this.generos = lista.results
      );
  }

}
