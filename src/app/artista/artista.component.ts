import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista = null;

  constructor(private disco: DiscoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.artista = this.disco.encontrarArtista(parseInt(id));
    this.disco.preencherObjetoArtista(this.artista);
  }

}
