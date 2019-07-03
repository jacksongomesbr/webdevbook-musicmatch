import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PublicoComponent } from './publico/publico.component';
import { MusicasComponent } from './musicas/musicas.component';
import { GeneroComponent } from './genero/genero.component';
import { MusicaComponent } from './musica/musica.component';
import { ArtistaComponent } from './artista/artista.component';
import { ArtistasComponent } from './artistas/artistas.component';

@NgModule({
  declarations: [
    HomeComponent,
    PesquisaComponent,
    LoginComponent,
    PublicoComponent,
    MusicasComponent,
    GeneroComponent,
    MusicaComponent,
    ArtistaComponent,
    ArtistasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    PublicoRoutingModule
  ]
})
export class PublicoModule { }
