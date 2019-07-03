import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MusicasService } from '../../shared/services/musicas/musicas.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  musica = null;
  relacionadas = null;

  constructor(private route: ActivatedRoute,
    private musicas$: MusicasService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.relacionadas = null;
        const id = params.get('id');
        this.musicas$.encontrar(parseInt(id))
          .subscribe(musica => {
            this.musica = musica;
            if (this.musica.url_do_video) {
              this.musica.url_do_video = this.sanitizer.bypassSecurityTrustResourceUrl(this.musica.url_do_video);
            }
          });
      });

    // this.route.paramMap.pipe(
    //   map(params => params.get('id')),
    //   map((id: string) => parseInt(id)),
    //   map(id => this.musicas$.encontrar(id)),
    //   mergeAll(),
    // ).subscribe(
    //   musica => this.musica = musica
    // );
  }

  gostar() {
    this.musicas$.gostar(this.musica.id)
      .subscribe(
        musica => this.musica = musica
      );
    // this.atualizarListaDeRelacionadas();
  }

  naoGostar() {
    this.musicas$.naoGostar(this.musica.id)
      .subscribe(
        musica => this.musica = musica
      );
    this.atualizarListaDeRelacionadas();
  }

  atualizarListaDeRelacionadas() {
    // this.musicas$.listaRelacionadas(this.musica)
    //   .subscribe(musicas => this.relacionadas = musicas);
  }

}
