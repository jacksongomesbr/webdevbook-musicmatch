import { Component, OnInit } from '@angular/core';
import { ArtistasService } from 'src/app/shared/services/artistas/artistas.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {
  artistas = null;

  constructor(private artistas$: ArtistasService) { }

  ngOnInit() {
    this.artistas$.lista(10, 0)
      .subscribe(
        lista => this.artistas = lista
      );
  }

}
