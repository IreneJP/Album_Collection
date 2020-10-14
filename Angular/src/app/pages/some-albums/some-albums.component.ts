import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { MongoService } from 'src/app/shared/mongo.service';
declare var $ : any;

@Component({
  selector: 'app-some-albums',
  templateUrl: './some-albums.component.html',
  styleUrls: ['./some-albums.component.css']
})
export class SomeAlbumsComponent implements OnInit {
  
  public formAlbum: FormGroup;
  public formAlbum1: FormGroup;
  public album:Album;
  public artistsNames: Artist[];
  public allAlbums: Album[];

  constructor(private mongoService: MongoService, private formBuilder: FormBuilder) {  
    this.artistsNames 
    this.formAlbum = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      artistId: new FormControl('', Validators.required),
      coverUrl: new FormControl('', Validators.required),
      year:  new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required)
    })
    this.formAlbum1 = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      artistId: new FormControl('', Validators.required),
      coverUrl: new FormControl('', Validators.required),
      year:  new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required)
    })
  }

  getArtistsNames(){
    this.mongoService.getAllArtists().subscribe((data:Artist[]) =>{
      this.artistsNames = data
      for(let i=0; i<this.artistsNames.length; i++){
        this.artistsNames[i]
      }
    })
  }  
  
  addSomeAlbums(){
    let newAlbum = new Album (this.formAlbum.value.title, this.formAlbum.value.artistId, this.formAlbum.value.coverUrl,  this.formAlbum.value.year, this.formAlbum.value.genre)
    let newAlbum1 = new Album (this.formAlbum1.value.title, this.formAlbum1.value.artistId, this.formAlbum1.value.coverUrl,  this.formAlbum1.value.year, this.formAlbum1.value.genre)
    
    this.mongoService.addSomeAlbums([newAlbum,newAlbum1]).subscribe((data:Album) => {
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
    this.getArtistsNames()
  }

}
