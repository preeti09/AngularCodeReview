import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  session: string;	
  constructor(private location:Location) { }

  ngOnInit() {

  	var userid = sessionStorage.getItem('id');
    this.session= userid;
    
  }
}