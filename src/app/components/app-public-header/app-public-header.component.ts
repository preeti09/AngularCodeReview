import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-public-header',
  templateUrl: './app-public-header.component.html',
  styleUrls: ['./app-public-header.component.css']
})
export class AppPublicHeaderComponent implements OnInit {

  session: string;	
  constructor(private location:Location) { }

  ngOnInit() {

  	var userid = sessionStorage.getItem('id');
    this.session= userid;
    
  }
}