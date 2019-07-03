import { Component, OnInit } from '@angular/core';
import { EstatisticasService } from '../services/estatisticas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  estatisticas = null;
  
  constructor(private estatisticas$: EstatisticasService) { }

  ngOnInit() {
    this.estatisticas$.get()
      .subscribe(
        dados => this.estatisticas = dados
      );
  }

}
