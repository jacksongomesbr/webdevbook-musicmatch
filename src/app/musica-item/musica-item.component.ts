import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-musica-item',
  templateUrl: './musica-item.component.html',
  styleUrls: ['./musica-item.component.css']
})
export class MusicaItemComponent implements OnInit {
  @Input()
  musica;
  
  constructor() { }

  ngOnInit() {
  }

}
