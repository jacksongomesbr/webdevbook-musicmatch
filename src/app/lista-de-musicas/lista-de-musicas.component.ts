import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-de-musicas',
  templateUrl: './lista-de-musicas.component.html',
  styleUrls: ['./lista-de-musicas.component.css']
})
export class ListaDeMusicasComponent implements OnInit {
  @Input() musicas;
  
  constructor() { }

  ngOnInit() {
  }

}
