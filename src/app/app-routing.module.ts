import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { SearcherComponent } from './pages/searcher/searcher.component';

const routes: Routes = [
  {path: "artist", component: ArtistComponent},
  {path: "album", component: AlbumComponent},
  {path: "searcher", component: SearcherComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'artist'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
