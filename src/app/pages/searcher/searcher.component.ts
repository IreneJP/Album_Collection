import { Album } from './../../models/album';
import { MongoService } from './../../shared/mongo.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  public artist: Artist;
  public album: Album;

  constructor(private mongoService:MongoService) { }

  getArtist(artistId){
    this.mongoService.getOneArtist(artistId).subscribe((data:Artist)=>{
     this.artist = data
     console.log(this.artist)
    })
  }

  getAlbum(albumId){
    this.mongoService.getOneAlbum(albumId).subscribe((data:Album)=>{
     this.album = data
     console.log(this.album)
    })
  }

  ngOnInit(): void {
  }

}
