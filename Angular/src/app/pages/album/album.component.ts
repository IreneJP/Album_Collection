import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { MongoService } from 'src/app/shared/mongo.service';
declare var $ : any;

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public allAlbums: Album[];
  public album: Album;
  submitted = false;

  public artistsNames: Artist[];

  constructor(private mongoService: MongoService) {}

  getAlbums(){
    this.mongoService.getAllAlbums().subscribe((data:Album[])=>{
      this.allAlbums = data
    })
  }

  getAlbum(albumId){
    this.mongoService.getOneAlbum(albumId).subscribe((data:Album)=>{
     this.album = data})
  }

  onSubmit(form){
    this.album = form.value       
    this.mongoService.modifyAlbum(form.value._id, this.album).subscribe((data) => {}) 
    this.submitted = true;
    location.reload();
  }

  getArtistsNames(){
    this.mongoService.getAllArtists().subscribe((data:Artist[]) =>{
      this.artistsNames = data
      for(let i=0; i<this.artistsNames.length; i++){
        this.artistsNames[i]
      }
    })
  }

  deleteAlbum(albumId:string){
    this.mongoService.removeAlbum(albumId).subscribe((data:Album) => {  
      }) 
      location.reload();
 }
 
  ngOnInit(): void {
    this.getAlbums()
    this.getArtistsNames()
  }

}
