import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenerosService } from '../generos.service';
import { map, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  genero = null;

  constructor(private route: ActivatedRoute, private generos$: GenerosService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      map((id: string) => parseInt(id)),
      map(id => this.generos$.encontrar(id)),
      mergeAll(),
    ).subscribe(
      genero => this.genero = genero
    );

  }

}
