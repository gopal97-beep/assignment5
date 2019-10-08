export class Books {
    id:number;
    title:string;
    author:string;
    price:number;
    comments:string[]=[];
    constructor(id , title, author, price, comments){
        this.id=id;
        this.title=title;
        this.author=author;
        this.price=price;
        this.comments=comments;

    }
}
