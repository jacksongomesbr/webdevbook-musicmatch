import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistasService } from '../artistas.service';
import { map, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista = null;

  constructor(private route: ActivatedRoute, private artistas$: ArtistasService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      map((id: string) => parseInt(id)),
      map(id => this.artistas$.encontrar(id)),
      mergeAll(),
    ).subscribe(
      artista => this.artista = artista
    );
  }

}
