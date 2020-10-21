import { Artist } from './../../models/artist';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MongoService } from 'src/app/shared/mongo.service';
declare let $ : any;

@Component({
  selector: 'app-some-artists',
  templateUrl: './some-artists.component.html',
  styleUrls: ['./some-artists.component.css']
})
export class SomeArtistsComponent implements OnInit {
  public formArtist: FormGroup;
  public formArtist1:FormGroup;

  constructor(private mongoService: MongoService, private formBuilder: FormBuilder) {

    this.formArtist = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      photoUrl: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      deathDate: new FormControl('')
    })
    this.formArtist1 = this.formBuilder.group({
      name1: new FormControl('', Validators.required),
      photoUrl1: new FormControl('', Validators.required),
      birthdate1: new FormControl('', Validators.required),
      deathDate1: new FormControl('')
    })
  }
  
  addSomeArtists(){
    let newArtist = new Artist (this.formArtist.value.name, this.formArtist.value.photoUrl, this.formArtist.value.birthdate,  this.formArtist.value.deathDate)
    let newArtist1 = new Artist (this.formArtist1.value.name1, this.formArtist1.value.photoUrl1, this.formArtist1.value.birthdate1,  this.formArtist1.value.deathDate1)

    this.mongoService.addSomeArtists([newArtist,newArtist1]).subscribe((data) =>  {
      this.formArtist.reset();
      this.formArtist1.reset();
    $('#added').modal('show') 
    }, error => {
      this.formArtist.reset();
      this.formArtist1.reset();
      $('#invalid').modal('show') 
    }) 
  }  
  
  get name(){
    return this.formArtist.get('name');
  }
  get photoUrl(){
    return this.formArtist.get('photoUrl');
  }
  get birthdate(){
    return this.formArtist.get('birthdate');
  }
  get deathDate(){
    return this.formArtist.get('deathDate');
  }

  get name1(){
    return this.formArtist1.get('name1');
  }
  get photoUrl1(){
    return this.formArtist1.get('photoUrl1');
  }
  get birthdate1(){
    return this.formArtist1.get('birthdate1');
  }
  get deathDate1(){
    return this.formArtist1.get('deathDate1');
  }

  ngOnInit(): void {
  }

}
