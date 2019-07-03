import { Component, OnInit } from '@angular/core';
import { ArtistasService } from '../../shared/services/artistas/artistas.service';
import { ValidacaoFormUtilService } from 'src/app/shared/services/validacao/validacao-form-util.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-artista',
  templateUrl: './editar-artista.component.html',
  styleUrls: ['./editar-artista.component.css']
})
export class EditarArtistaComponent implements OnInit {
  artista = null;
  foto = null;
  fotoRemovida = null;

  constructor(private artistas$: ArtistasService,
    private route: ActivatedRoute,
    private validacao$: ValidacaoFormUtilService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = parseInt(params.get('id'));
        this.validacao$.erro = null;
        this.artistas$.encontrar(id)
          .subscribe(
            artista => this.artista = artista
          );
      }
    );
  }

  salvar() {
    this.artistas$.editar(this.artista.id, this.artista.nome, this.foto)
      .subscribe(
        data => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }

  onChangeFoto(files: FileList) {
    const fileItem = files.item(0);
    this.foto = fileItem;
  }

  removerFoto() {
    this.artistas$.removerFoto(this.artista.id)
    .subscribe(
      _ => {
        this.fotoRemovida = true;
        this.artista.foto = null;
      },
      _ => this.fotoRemovida = false
    );
  }

}
