import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../models/album';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  private url = "http://localhost:3000/"

  constructor(private http: HttpClient ) {console.log("Servicio listo")  }
  

 getOneArtist(artistId:string){
    return this.http.get(this.url + "artist/" + artistId)
  }

  getAllArtists(){
    console.log("hola desde el servicio")
    return this.http.get(this.url + "artists/all")
  }

  addOneArtist(artist:Artist){
    return this.http.post(this.url + "artist", artist)    
  }

  addSomeArtists(artists:Artist[]){
    return this.http.post(this.url + "artists", artists)    
  }

  removeArtist(artistId:string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),body:{artistId:artistId}};
      console.log(artistId)
    return this.http.delete(this.url, httpOptions)
}

  getOneAlbum(AlbumId:string){
    return this.http.get(this.url + "Album/" + AlbumId)
  }

  getAllAlbums(){
    return this.http.get(this.url + "Albums/all")
  }

  addOneAlbum(album:Album){
    return this.http.post(this.url + "Album", Album)    
  }

  addSomeAlbum(Albums:Album[]){
    return this.http.post(this.url + "Album", Albums)    
  }

  removeAlbum(albumId:string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),body:{albumId:albumId}};
      console.log(albumId)
    return this.http.delete(this.url, httpOptions)
  }
}
