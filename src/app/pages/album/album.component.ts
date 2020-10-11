import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { MongoService } from 'src/app/shared/mongo.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public allAlbums: Album[];

  constructor(private mongoService: MongoService) { }

  getAlbums(){
    this.mongoService.getAllAlbums().subscribe((data:Album[])=>{
      this.allAlbums = data
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.getAlbums()
  }

}
