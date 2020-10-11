export class Artist {
    public name: string;    
    public photoUrl: string;
    public birthdate: Date;
    public deathDate: Date;

    constructor (name: string, photoUrl: string, birthdate:Date, deathDate: Date){
        this.name = name;
        this.photoUrl = photoUrl;
        this.birthdate = birthdate; 
        this.deathDate = deathDate;        
    }
}
