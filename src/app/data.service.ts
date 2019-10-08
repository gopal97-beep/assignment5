import { Injectable } from '@angular/core';
import {Books} from './books';
import { Addcomclass} from './Addcomclass';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  books:Books[]=[];
  comm:Addcomclass[]=[];
  comments:string;
  id:number=1;
  
  
  title:string;
  author:string;
  price:number;
  


  constructor() { }
  create(b:Books){
    b.id=this.id;
    ++this.id;
    
    this.books.push(b);
  }
  comment(r:Books){
    this.books.push(r);  }

  reset1(b:Books){
this.title="11";
b.title=this.title;
this.books.push(b);
  }

  
  
}
