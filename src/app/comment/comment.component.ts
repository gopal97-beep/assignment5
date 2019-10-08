import { Component, OnInit } from '@angular/core';
import {Books} from '../Books';
import { DataService } from '../data.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  id:number;
  title:string;
  author:string;
  price:number;
  newbook:Books;
  comments:string[]=[];

  constructor( private svc:DataService) { }

  ngOnInit() {
  }
  p1(){
    this.newbook=new Books(this.id, this.title, this.author, this.price,this.comments);
    console.log(this.newbook);
    this.svc.comment(this.newbook);

  }

  

}
