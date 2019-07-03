import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { CadastrarArtistaComponent } from './cadastrar-artista/cadastrar-artista.component';
import { ArtistaListaComponent } from './artista-lista/artista-lista.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MusicaListaComponent } from './musica-lista/musica-lista.component';
import { MusicaCadastrarComponent } from './musica-cadastrar/musica-cadastrar.component';
import { MusicaEditarComponent } from './musica-editar/musica-editar.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { GeneroCadastrarComponent } from './genero-cadastrar/genero-cadastrar.component';
import { GeneroEditarComponent } from './genero-editar/genero-editar.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    EditarArtistaComponent,
    CadastrarArtistaComponent,
    ArtistaListaComponent,
    MusicaListaComponent,
    MusicaCadastrarComponent,
    MusicaEditarComponent,
    GeneroListaComponent,
    GeneroCadastrarComponent,
    GeneroEditarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    PaginationModule.forRoot()
  ],
  providers: []
})
export class AdminModule { }
