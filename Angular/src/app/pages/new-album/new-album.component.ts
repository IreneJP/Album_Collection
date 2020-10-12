import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Album } from 'src/app/models/album';
import { MongoService } from 'src/app/shared/mongo.service';
declare var $ : any;

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {
  public formAlbum: FormGroup;
  public album:Album
  constructor(private mongoService: MongoService, private formBuilder: FormBuilder) {

    this.formAlbum = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      artistId: new FormControl('', Validators.required),
      coverUrl: new FormControl('', Validators.required),
      year:  new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required)
    })
  }

  addNewAlbum(){
    let newAlbum = new Album (this.formAlbum.value.title, this.formAlbum.value.artistId, this.formAlbum.value.coverUrl,  this.formAlbum.value.year, this.formAlbum.value.genre)
   console.log(newAlbum)
    this.mongoService.addOneAlbum(newAlbum).subscribe((data:Album) => {
          console.log(data)
    })    
    this.formAlbum.reset()
    $('#added').modal('show')  
  }
  
  get title(){
    return this.formAlbum.get('title')
  }
  get artistId(){
    return this.formAlbum.get('artistId')
  }
  get coverUrl(){
    return this.formAlbum.get('coverUrl')
  }
  get genre(){
    return this.formAlbum.get('genre')
  }
  get year(){
    return this.formAlbum.get('year')
  }

  ngOnInit(): void {
  }

}
