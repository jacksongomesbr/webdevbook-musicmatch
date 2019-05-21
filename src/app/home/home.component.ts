import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  musicas = null;

  constructor(private disco: DiscoService) { }

  ngOnInit() {
    this.musicas = this.disco.listaDeMusicas();
  }

}
