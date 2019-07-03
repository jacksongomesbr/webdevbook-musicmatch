import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeMusicasComponent } from './lista-de-musicas/lista-de-musicas.component';
import { RouterModule } from '@angular/router';
import { DadosBaseService } from './services/dados-base/dados-base.service';
import { LoginService } from './services/login/login.service';
import { AuthService } from './services/auth/auth.service';
import { ArtistasService } from './services/artistas/artistas.service';
import { GenerosService } from './services/generos/generos.service';
import { MusicasService } from './services/musicas/musicas.service';
import { PesquisaService } from './services/pesquisa/pesquisa.service';
import { ValidacaoFormUtilService } from './services/validacao/validacao-form-util.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../http-interceptors';

@NgModule({
  declarations: [ListaDeMusicasComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    DadosBaseService,
    LoginService,
    AuthService,
    ArtistasService,
    GenerosService,
    MusicasService,
    PesquisaService,
    ValidacaoFormUtilService,
    httpInterceptorProviders
  ],
  exports: [ListaDeMusicasComponent]
})
export class SharedModule { }
