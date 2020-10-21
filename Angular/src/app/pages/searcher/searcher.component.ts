import { Artist } from './../../models/artist';
import { Album } from './../../models/album';
import { MongoService } from './../../shared/mongo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  public artist: Artist;
  public allAlbums: Album[];
  public albumsArtist: Album[];
  public artistsNames: Artist[];
  public formAlbum: FormGroup;
  public artistsNamesSubscription: Subscription;


  constructor(private mongoService:MongoService, private formBuilder: FormBuilder) {
    this.formAlbum = this.formBuilder.group({
      artistId: new FormControl('', Validators.required)
    })
  }

  get artistId(){
    return this.formAlbum.get('artistId');
  }

  getArtist(artistId){
    this.mongoService.getOneArtist(artistId).subscribe((data:Artist)=>{
     this.artist = data;
    })
  }

  artistAlbums(artistId){  
    artistId = this.formAlbum.value.artistId;
    this.getArtist(artistId);

    this.mongoService.getAllAlbums().subscribe((data:Album[])=>{
      this.allAlbums = data;
      this.albumsArtist = this.allAlbums.filter(album => album.artistId === artistId);
    })
  }

  ngOnInit(): void {
    this.artistsNamesSubscription = this.mongoService.getAllArtists().subscribe((data:Artist[]) =>{
      this.artistsNames = data;
      for(let i=0; i<this.artistsNames.length; i++){
        this.artistsNames[i];
      }
    })
  }

  ngOnDestroy(): void {
    this.artistsNamesSubscription.unsubscribe();
  }

}
