import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Artist } from 'src/app/models/artist';
import { MongoService } from 'src/app/shared/mongo.service';
declare var $ : any;

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.component.html',
  styleUrls: ['./new-artist.component.css']
})
export class NewArtistComponent implements OnInit {
  public formArtist: FormGroup;
  public album:Artist
  constructor(private mongoService: MongoService, private formBuilder: FormBuilder) {

    this.formArtist = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      photoUrl: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      deathDate:  new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required)
    })
  }

  addNewArtist(){
    let newArtist = new Artist (this.formArtist.value.name, this.formArtist.value.photoUrl, this.formArtist.value.birthdate,  this.formArtist.value.deathDate)
   console.log(newArtist)
    this.mongoService.addOneArtist(newArtist).subscribe((data:Artist) => {
          console.log(data)
    })    
    this.formArtist.reset()
    $('#added').modal('show')  
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
  }

}
