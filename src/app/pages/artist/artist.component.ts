import { Artist } from './../../models/artist';
import { MongoService } from './../../shared/mongo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
   public allArtists: Artist[];
   public artist: Artist;

  constructor(private mongoService: MongoService) { }

  getArtists(){
    this.mongoService.getAllArtists().subscribe((data:Artist[])=>{
      this.allArtists = data
      console.log(data)
    })
  }

  getArtist(artistId){
    this.mongoService.getOneArtist(artistId).subscribe((data:Artist)=>{
     this.artist = data
     console.log(this.artist)
    })
  }


  
  ngOnInit(): void {
    this.getArtists()
  }

}
