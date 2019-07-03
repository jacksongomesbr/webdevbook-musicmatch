import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../../shared/services/generos/generos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {
  generos = null;
  resultadoExcluir = null;
  offset = 0;
  count = null;
  limit = 10;

  constructor(private generos$: GenerosService, private router: Router) { }

  ngOnInit() {
    this.atualizarLista();
  }

  atualizarLista() {
    this.generos$.lista(this.limit, this.offset)
      .subscribe(
        lista => {
          this.count = lista.count;
          this.generos = lista.results;
        }
      );
  }

  pageChanged(event: any): void {
    this.offset = (event.page - 1) * this.limit;
    this.atualizarLista();
  }

  excluir(genero) {
    if (confirm(`Tem certeza que deseja excluir o gênero musical "${genero.nome}" ?\nEssa ação não é reversível!`)) {
      this.generos$.excluir(genero.id)
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

  editar(genero) {
    this.router.navigate(['admin', 'generos', genero.id]);
  }
}
