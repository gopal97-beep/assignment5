import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Books} from '../books';
import { Addcomclass} from '../Addcomclass';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  books:Books[]=[];
  hh=[];
  comm:Addcomclass[]=[];

  constructor(public svc:DataService) { }

  ngOnInit() {
    this.books=this.svc.books;
    this.comm=this.svc.comm;

    this.hh.push(this.books);
    this.hh.toString();
  }


}
