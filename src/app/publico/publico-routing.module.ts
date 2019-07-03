import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { LoginComponent } from './login/login.component';
import { PublicoComponent } from './publico/publico.component';
import { MusicasComponent } from './musicas/musicas.component';
import { GeneroComponent } from './genero/genero.component';
import { MusicaComponent } from './musica/musica.component';
import { ArtistaComponent } from './artista/artista.component';
import { ArtistasComponent } from './artistas/artistas.component';

const routes: Routes = [
  {
    path: '', component: PublicoComponent, children: [
      { path: 'musicas', component: MusicasComponent },
      { path: 'login', component: LoginComponent },
      { path: 'pesquisa', component: PesquisaComponent },
      { path: 'generos/:id', component: GeneroComponent },
      { path: 'musicas/:id', component: MusicaComponent },
      { path: 'artistas', component: ArtistasComponent },
      { path: 'artistas/:id', component: ArtistaComponent },
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
