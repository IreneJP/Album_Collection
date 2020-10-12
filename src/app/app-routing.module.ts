import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { NewAlbumComponent } from './pages/new-album/new-album.component';
import { NewArtistComponent } from './pages/new-artist/new-artist.component';
import { SearcherComponent } from './pages/searcher/searcher.component';

const routes: Routes = [
  {path: "artist", component: ArtistComponent},
  {path: "album", component: AlbumComponent},
  {path: "searcher", component: SearcherComponent},
  {path: "newAlbum", component: NewAlbumComponent},
  {path: "newArtist", component: NewArtistComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'artist'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
