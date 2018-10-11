import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from "@angular/common";
import { User } from '../../user';
import {Http, Headers, Response} from '@angular/http'; 

// import { switchMap, map } from 'rxjs/operators';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-cemetery-owners',
  templateUrl: './cemetery-owners.component.html',
  styleUrls: ['./cemetery-owners.component.css']
})
export class CemeteryOwnersComponent implements OnInit {
  refreshData(): any {
    throw new Error("Method not implemented.");
  }
user: User[];
successMessage : object = {};
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router, private location:Location) { }

  ngOnInit(){
    var userid = sessionStorage.getItem('id');
    if(userid == null){
      this.router.navigate(['/login']);  
    }
    this.showUser();
  }
  showUser(): void{
    this.userService.showuser().then(res =>{
      console.log(res);
      this.user = res.json();
    })
   // this.CemeteryName();
  }
  getupdata(id: string): void
  {
    this.router.navigate(['/cemetery-owner-edit',id]);

  }

  userDelete(id: string): void
  {
    const isConfirmed = confirm('Are you sure to delete this User ?');
      if (isConfirmed) {
      this.userService.userDelete(id)
      .then(res =>{
        if(res){
        this.successMessage = { status : true, message : 'Cemetery Deleted Successfylly.' };
        setTimeout (() => { 
          this.successMessage = { status : null, message : null };
          window.location.reload()
        }, 3000);
      }else{
        this.successMessage = { status : false, message : 'Something Went Wrong. Plese try again' };
        setTimeout (() => { 
          this.successMessage = { status : null, message : null };
        }, 3000);
         
      }  
      })
      }
  }

  actdac(data): void  // activate and inactivate user 
  {
      this.userService.status(data)
      .then(res=>{
        window.location.reload()
       })
  }
}
function newFunction(): any {
  return '/cemetery-owners';
}

