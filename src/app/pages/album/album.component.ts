import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public album2: Album;
  public formAlbum: FormGroup;
  submitted = false;

  constructor(private mongoService: MongoService, private formBuilder: FormBuilder) {

    this.formAlbum = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      artistId: new FormControl('', Validators.required),
      coverUrl: new FormControl('', Validators.required),
      year:  new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required)
    })

   }

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
    $('#myModal').modal('show')
    $('.alert').alert('show')
    
  }

  deleteAlbum(albumId:string){
    this.mongoService.removeAlbum(albumId).subscribe((data) => {
      console.log("desdeTS",data)
   })    
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
    this.getAlbums()
  }

}
