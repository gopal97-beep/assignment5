import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Books} from '../books'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books:Books[]=[];
  id:number;
  title:string;
  author:string;
  price:number;
  
  newbook1:Books;

  constructor(private svc:DataService) { }

  ngOnInit() {
    this.books=this.svc.books;
  }
  reset(){
    for(let i=0;i<this.books.length;i++)
    {this.books[i].price=0;
      this.books[i].title="";
  this.books[i].author="";
}
  }

}
