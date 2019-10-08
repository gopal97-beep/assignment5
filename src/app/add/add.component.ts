import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id:number;
  title:string;
  author:string;
  price:number;
  newbook:Books;
  comments:string;

  constructor( private svc:DataService) { }

  ngOnInit() {
  }
  createBooks(){
    this.newbook=new Books(this.id, this.title, this.author, this.price,this.comments);
    console.log(this.newbook);
    this.svc.create(this.newbook);
  }
 

}
