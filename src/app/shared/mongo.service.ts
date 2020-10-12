import { Album } from './../models/album';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  private url1 = "http://localhost:3000/artist"
  private url2 = "http://localhost:3000/album"

  constructor(private http: HttpClient ) {console.log("Servicio listo")  }
  

 getOneArtist(artistId:string){
    return this.http.get(this.url1 + "/" + artistId)
  }

  getAllArtists(){
    return this.http.get(this.url1 + "s/all")
  }

  addOneArtist(artist:Artist){
    return this.http.post(this.url1, artist)    
  }

  addSomeArtists(artists:Artist[]){
    return this.http.post(this.url1 + "s", artists)    
  }


  removeArtist(artistId:string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),body:{artistId:artistId}};
      console.log(artistId)
    return this.http.delete(this.url1, httpOptions)
}

  getOneAlbum(AlbumId:string){
    return this.http.get(this.url2 + "/" + AlbumId)
  }

  getAllAlbums(){
    return this.http.get(this.url2 + "s/all")
  }

  addOneAlbum(album:Album){
    console.log("album en servicio", album)
    return this.http.post(this.url2 , album)    
  }

  addSomeAlbums(albums:Album[]){
    return this.http.post(this.url2 + "s", albums)    
  }

  
  modifyAlbum(albumId, album){
    console.log((this.url2 + "/" + albumId))
    return this.http.put(this.url2 + "/" + albumId, album )
  }

  //NO VA
  removeAlbum(albumId:string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body:{albumId: albumId} };
      console.log(albumId, "en servicio")
    return this.http.delete(this.url2 + "/", httpOptions)
  }
}
