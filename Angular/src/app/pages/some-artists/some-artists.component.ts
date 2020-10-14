import { Artist } from './../../models/artist';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MongoService } from 'src/app/shared/mongo.service';
declare var $ : any;

@Component({
  selector: 'app-some-artists',
  templateUrl: './some-artists.component.html',
  styleUrls: ['./some-artists.component.css']
})
export class SomeArtistsComponent implements OnInit {
  public formArtist: FormGroup;
  public formArtist1:FormGroup;
  public album:Artist
  public allArtists:Artist[];

  constructor(private mongoService: MongoService, private formBuilder: FormBuilder) {

    this.formArtist = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      photoUrl: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required)
    })
    this.formArtist1 = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      photoUrl: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required)
    })
  }

  getArtists(){
    this.mongoService.getAllArtists().subscribe((data:Artist[]) => {
      this.allArtists = data
    })    
  }

  
  addSomeArtists(){
    let newArtist = new Artist (this.formArtist.value.name, this.formArtist.value.photoUrl, this.formArtist.value.birthdate,  this.formArtist.value.deathDate)
    let newArtist1 = new Artist (this.formArtist1.value.name, this.formArtist1.value.photoUrl, this.formArtist1.value.birthdate,  this.formArtist1.value.deathDate)

    this.mongoService.addSomeArtists([newArtist,newArtist1]).subscribe((data) =>  {
      this.formArtist.reset()
      this.formArtist1.reset()
    $('#added').modal('show') 
    }, error => {
      this.formArtist.reset()
      this.formArtist1.reset()
      $('#invalid').modal('show') 
    })    
     
  }
  
  
  get name(){
    return this.formArtist.get('name')
  }
  get photoUrl(){
    return this.formArtist.get('photoUrl')
  }
  get birthdate(){
    return this.formArtist.get('birthdate')
  }
  get deathDate(){
    return this.formArtist.get('deathDate')
  }
  ngOnInit(): void {
    this.getArtists()
  }

}
