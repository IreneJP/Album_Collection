export class Album {
    public title: string;
    public artistId: string;
    public coverUrl: string;
    public year: number;
    public genre: string;

    constructor (title: string, artistId: string, coverUrl:string, year: number, genre: string){
        this.title = title;
        this.artistId = artistId;
        this.coverUrl = coverUrl; 
        this.year = year; 
        this.genre = genre       
    }
}

