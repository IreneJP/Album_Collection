import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
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

  public artistsNames: Artist[];

  constructor(private mongoService: MongoService) {}

  getAlbums(){
    this.mongoService.getAllAlbums().subscribe((data:Album[])=>{
      this.allAlbums = data
    })
  }

  getAlbum(albumId){
    this.mongoService.getOneAlbum(albumId).subscribe((data:Album)=>{
     this.album = data})
  }

  hideAll(): void {
		//try to hide all active modals
		var openModals = document.querySelectorAll(".modal.in");
		if(openModals) {
			for(let i = 0; i < openModals.length; i++) {
				//Get the modal-header of the modal
				var modalHeader = openModals[i].getElementsByClassName("modal-header");
				if(modalHeader && modalHeader.length > 0) {
					//Get the close button in the modal header
					var closeButton : any = modalHeader[0].getElementsByTagName("BUTTON");
					if(closeButton && closeButton.length > 0) {
						//simulate click on close button
						closeButton[0].click();
					}
				}
			}
		}
	}

  onSubmit(form){
    this.album = form.value       
    this.mongoService.modifyAlbum(form.value._id, this.album).subscribe((data) => {}) 
    this.hideAll()
  }

  getArtistsNames(){
    this.mongoService.getAllArtists().subscribe((data:Artist[]) =>{
      this.artistsNames = data
      for(let i=0; i<this.artistsNames.length; i++){
        this.artistsNames[i]
      }
    })
  }

  deleteAlbum(albumId:string){
    $('#added').modal('show')
    this.mongoService.removeAlbum(albumId).subscribe((data:Album) => {  
      this.getAlbums()
      }) 
 }

 
  ngOnInit(): void {
    this.getAlbums()
    this.getArtistsNames()
  }

}
