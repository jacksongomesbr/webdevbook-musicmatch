import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin.component';
import { CadastrarArtistaComponent } from './cadastrar-artista/cadastrar-artista.component';
import { ArtistaListaComponent } from './artista-lista/artista-lista.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { AuthGuard } from './auth.guard';
import { MusicaListaComponent } from './musica-lista/musica-lista.component';
import { MusicaCadastrarComponent } from './musica-cadastrar/musica-cadastrar.component';
import { MusicaEditarComponent } from './musica-editar/musica-editar.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { GeneroCadastrarComponent } from './genero-cadastrar/genero-cadastrar.component';
import { GeneroEditarComponent } from './genero-editar/genero-editar.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
      {
        path: '', canActivateChild: [AuthGuard], children: [
          { path: 'artistas', component: ArtistaListaComponent },
          { path: 'artistas/cadastrar', component: CadastrarArtistaComponent },
          { path: 'artistas/:id', component: EditarArtistaComponent },
          { path: 'musicas', component: MusicaListaComponent },
          { path: 'musicas/cadastrar', component: MusicaCadastrarComponent },
          { path: 'musicas/:id', component: MusicaEditarComponent },
          { path: 'generos', component: GeneroListaComponent },
          { path: 'generos/cadastrar', component: GeneroCadastrarComponent },
          { path: 'generos/:id', component: GeneroEditarComponent },
          { path: '', component: HomeComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
