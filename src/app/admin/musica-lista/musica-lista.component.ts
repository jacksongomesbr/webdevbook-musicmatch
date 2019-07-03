import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../../shared/services/musicas/musicas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musica-lista',
  templateUrl: './musica-lista.component.html',
  styleUrls: ['./musica-lista.component.css']
})
export class MusicaListaComponent implements OnInit {
  musicas = null;
  resultadoExcluir = null;
  offset = 0;
  count = null;
  limit = 10;

  constructor(private musicas$: MusicasService, private router: Router) { }

  ngOnInit() {
    this.atualizarLista();
  }

  atualizarLista() {
    this.musicas$.lista(this.limit, this.offset)
      .subscribe(
        lista => {
          this.count = lista.count;
          this.musicas = lista.results;
        }
      );
  }

  pageChanged(event: any): void {
    this.offset = (event.page - 1) * this.limit;
    this.atualizarLista();
  }

  excluir(musica) {
    if (confirm(`Tem certeza que deseja excluir a música "${musica.titulo}" ?\nEssa ação não é reversível!`)) {
      this.musicas$.excluir(musica.id)
        .subscribe(
          _ => {
            this.resultadoExcluir = true;
            this.atualizarLista();
          },
          err => {
            this.resultadoExcluir = err.error;
          }
        );
    }
  }

  editar(musica) {
    this.router.navigate(['admin', 'musicas', musica.id]);
  }
}
