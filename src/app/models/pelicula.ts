export class Pelicula{

    /* public title: string;
    public year: number;
    public image: string;

    constructor(title:string, year:number, image:string){
        this.title = title;
        this.year = year;
        this.image = image;
    } */

    // Se puede recortar de esta manera
    constructor(
        public title: string,
        public year: number,
        public image: string,
    ){}
}