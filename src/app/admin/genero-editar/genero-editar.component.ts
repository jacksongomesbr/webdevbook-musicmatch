import { Component, OnInit } from '@angular/core';
import { GenerosService } from 'src/app/shared/services/generos/generos.service';
import { ActivatedRoute } from '@angular/router';
import { ValidacaoFormUtilService } from 'src/app/shared/services/validacao/validacao-form-util.service';

@Component({
  selector: 'app-genero-editar',
  templateUrl: './genero-editar.component.html',
  styleUrls: ['./genero-editar.component.css']
})
export class GeneroEditarComponent implements OnInit {
  genero = null;

  constructor(private generos$: GenerosService,
    private route: ActivatedRoute,
    private validacao$: ValidacaoFormUtilService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = parseInt(params.get('id'));
        this.validacao$.erro = null;
        this.generos$.encontrar(id)
          .subscribe(
            genero => this.genero = genero
          );
      }
    );
  }

  salvar() {
    this.generos$.editar(this.genero.id, this.genero.nome)
      .subscribe(
        _ => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }
}
