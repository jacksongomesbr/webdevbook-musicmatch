import { Component, OnInit } from '@angular/core';
import { ArtistasService } from '../artistas.service';
import { ValicacaoFormUtilService } from '../valicacao-form-util.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-artista',
  templateUrl: './editar-artista.component.html',
  styleUrls: ['./editar-artista.component.css']
})
export class EditarArtistaComponent implements OnInit {
  artista = null;
  foto = null;

  constructor(private artistas$: ArtistasService,
    private route: ActivatedRoute,
    private validacao$: ValicacaoFormUtilService) { }

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


}
