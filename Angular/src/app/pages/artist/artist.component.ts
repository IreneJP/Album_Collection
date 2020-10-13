import { Artist } from './../../models/artist';
import { MongoService } from './../../shared/mongo.service';
import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
   public allArtists: Artist[];
   public artist: Artist;
   submitted = false;

  constructor(private mongoService: MongoService) { }

  getArtists(){
    this.mongoService.getAllArtists().subscribe((data:Artist[])=>{
      this.allArtists = data
    })
  }

  getArtist(artistId){
    this.mongoService.getOneArtist(artistId).subscribe((data:Artist)=>{     
     this.artist = data
    })    
  }


  onSubmit(form){
    this.artist = form.value       
    this.mongoService.modifyArtist(form.value._id, this.artist).subscribe((data) => {  }) 
    this.submitted = true;
    location.reload();
  }

  deleteAlbum(artistId:string){
    this.mongoService.removeAlbum(artistId).subscribe((data:Artist) => {  
      }) 
      location.reload();
 }
  
  ngOnInit(): void {
    this.getArtists()
    
  }

}
