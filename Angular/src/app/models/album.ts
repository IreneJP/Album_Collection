export class Album {    
    public title: string;
    public artistId: string;
    public coverUrl: string;
    public year: number;
    public genre: string;
    public _id?: string;

    constructor (title: string, artistId: string, coverUrl:string, year: number, genre: string, _id?:string){
        this.title = title;
        this.artistId = artistId;
        this.coverUrl = coverUrl; 
        this.year = year; 
        this.genre = genre       
    }
}

