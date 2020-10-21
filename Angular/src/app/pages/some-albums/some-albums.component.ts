import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { MongoService } from 'src/app/shared/mongo.service';
declare let $ : any;

@Component({
  selector: 'app-some-albums',
  templateUrl: './some-albums.component.html',
  styleUrls: ['./some-albums.component.css']
})
export class SomeAlbumsComponent implements OnInit {
  
  public formAlbum: FormGroup;
  public formAlbum1: FormGroup;
  public artistsNames: Artist[];
  public artistsNamesSubscription: Subscription;

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
      title1: new FormControl('', Validators.required),
      artistId1: new FormControl('', Validators.required),
      coverUrl1: new FormControl('', Validators.required),
      year1:  new FormControl('', Validators.required),
      genre1: new FormControl('', Validators.required)
    })
  }
  
  addSomeAlbums(){
    let newAlbum = new Album (this.formAlbum.value.title, this.formAlbum.value.artistId, this.formAlbum.value.coverUrl,  this.formAlbum.value.year, this.formAlbum.value.genre)
    let newAlbum1 = new Album (this.formAlbum1.value.title1, this.formAlbum1.value.artistId1, this.formAlbum1.value.coverUrl1,  this.formAlbum1.value.year1, this.formAlbum1.value.genre1)
    
    this.mongoService.addSomeAlbums([newAlbum,newAlbum1]).subscribe((data:Album) => {
      this.formAlbum.reset();
      $('#added').modal('show');
    }, error => {
      this.formAlbum.reset()
      $('#invalid').modal('show') 
    });  
  }

  get title(){
    return this.formAlbum.get('title');
  }
  get artistId(){
    return this.formAlbum.get('artistId');
  }
  get coverUrl(){
    return this.formAlbum.get('coverUrl');
  }
  get genre(){
    return this.formAlbum.get('genre');
  }
  get year(){
    return this.formAlbum.get('year');
  }
  get title1(){
    return this.formAlbum1.get('title1');
  }
  get artistId1(){
    return this.formAlbum1.get('artistId1');
  }
  get coverUrl1(){
    return this.formAlbum1.get('coverUrl1');
  }
  get genre1(){
    return this.formAlbum1.get('genre1');
  }
  get year1(){
    return this.formAlbum1.get('year1');
  }

  ngOnInit(): void {
    this.artistsNamesSubscription = this.mongoService.getAllArtists().subscribe((data:Artist[]) =>{
     this.artistsNames = data;
      for(let i=0; i<this.artistsNames.length; i++){
        this.artistsNames[i];
      }
    })
  }

  ngOnDestroy(): void{
    this.artistsNamesSubscription.unsubscribe();
  }

}
