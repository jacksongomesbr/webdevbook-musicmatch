import { Component, OnInit } from '@angular/core';
import { GenerosService } from 'src/app/shared/services/generos/generos.service';
import { ValidacaoFormUtilService } from 'src/app/shared/services/validacao/validacao-form-util.service';

@Component({
  selector: 'app-genero-cadastrar',
  templateUrl: './genero-cadastrar.component.html',
  styleUrls: ['./genero-cadastrar.component.css']
})
export class GeneroCadastrarComponent implements OnInit {
  nome = null;

  constructor(private generos$: GenerosService,
    private validacao$: ValidacaoFormUtilService) { }

  ngOnInit() {
    this.validacao$.erro = null;
  }

  salvar() {
    this.generos$.cadastrar(this.nome)
      .subscribe(
        _ => this.validacao$.erro = false,
        err => {
          this.validacao$.erro = err.error;
        }
      );
  }

}
