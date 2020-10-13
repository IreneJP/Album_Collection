import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { AlbumComponent } from './pages/album/album.component'; 
import { ArtistComponent } from './pages/artist/artist.component';

import { MongoService } from './shared/mongo.service';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewAlbumComponent } from './pages/new-album/new-album.component';
import { NewArtistComponent } from './pages/new-artist/new-artist.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    SearcherComponent,
    AlbumComponent,
    NavBarComponent,
    NewAlbumComponent,
    NewArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [
    MongoService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
