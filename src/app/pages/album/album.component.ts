import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
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

  constructor(private mongoService: MongoService) {}

  getAlbums(){
    this.mongoService.getAllAlbums().subscribe((data:Album[])=>{
      this.allAlbums = data
      console.log(data)
    })
  }

  getAlbum(albumId){
    this.mongoService.getOneAlbum(albumId).subscribe((data:Album)=>{
     this.album = data
     console.log(this.album)
    })
  }

  onSubmit(form){
    this.album = form.value       
    this.mongoService.modifyAlbum(form.value._id, this.album).subscribe((data) => {     
      console.log(data)
      }) 
    this.submitted = true;
  }

  deleteAlbum(albumId:string){
    this.mongoService.removeAlbum(albumId).subscribe((data:Album) => {  
      }) 
      location.reload();
 }

  ngOnInit(): void {
    this.getAlbums()
  }

}
