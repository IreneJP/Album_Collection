export class Artist {
    public _id?: string;
    public name: string;    
    public photoUrl: string;
    public birthdate: Date;
    public deathDate: Date;

    constructor (name: string, photoUrl: string, birthdate:Date, deathDate: Date, _id?: string){
        this.name = name;
        this.photoUrl = photoUrl;
        this.birthdate = birthdate; 
        this.deathDate = deathDate;        
    }
}
