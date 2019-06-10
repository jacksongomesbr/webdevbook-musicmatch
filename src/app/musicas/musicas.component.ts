import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {
  generos = [];

  constructor(private generos$: GenerosService) { }

  ngOnInit() {
    this.generos$.lista().subscribe(
      lista => this.generos = lista.results
    );
  }

}
