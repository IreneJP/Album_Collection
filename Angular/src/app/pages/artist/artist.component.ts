import { Artist } from './../../models/artist';
import { MongoService } from './../../shared/mongo.service';
import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
   public allArtists: Artist[];
   public artist: Artist;
   submitted = false;

  constructor(private mongoService: MongoService) { }

  getArtists(){
    this.mongoService.getAllArtists().subscribe((data:Artist[])=>{
      this.allArtists = data
    })
  }

  getArtist(artistId){
    this.mongoService.getOneArtist(artistId).subscribe((data:Artist)=>{     
     this.artist = data
    })    
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
    this.artist = form.value   
    this.mongoService.modifyArtist(form.value._id, this.artist).subscribe((data) => { }) 
    this.hideAll()
  }

  deleteArtist(artistId:string){
    $('#added').modal('show')
    this.mongoService.removeArtist(artistId).subscribe((data:Artist) => { 
      this.getArtists()
      })
 }
  
  ngOnInit(): void {
    this.getArtists()
  }
}
