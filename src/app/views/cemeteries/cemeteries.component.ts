import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from "@angular/common";
import { User } from '../../user';

@Component({
  selector: 'app-cemeteries',
  templateUrl: './cemeteries.component.html',
  styleUrls: ['./cemeteries.component.css']
})
export class CemeteriesComponent implements OnInit {

  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router, private location:Location) { }
  user: any [];
  successMessage: object = {};

  ngOnInit(){
    var userid = sessionStorage.getItem('id');
    if(userid == null){
      this.router.navigate(['/login']);  
    }
      this.getUser();
      // this.userDelete(id);
  }

  getUser(): void{
      	 this.userService.getCemetery().then(res =>{
           console.log(res);
         this.user = res.json();
       });
  }
  updatecemetery(cmid: string): void
  {
       this.router.navigate(['/cemetery-edit',cmid]);
  }

  // userDelete(id: string): void
  // {
  //     this.userService.cemeteryDelete(id)
  //     .then(res =>{
  //       this.router.navigate(['/cemeteries']);

  //     this.getUser();
  //     })

  // }

  userDelete(id: string): void {
    const isConfirmed = confirm('Are you sure to delete this Cemetery ?');
    if (isConfirmed) {
      this.userService.cemeteryDelete(id)
        .then(res => {
          if (res) {
            this.successMessage = { status: true, message: 'Cemetery Deleted Successfylly.' };
            setTimeout(() => {
              this.successMessage = { status: null, message: null };
              this.router.navigate(['/cemeteries']);
              this.getUser();
            }, 3000);
          } else {
            this.successMessage = { status: false, message: 'Something Went Wrong. Plese try again' };
            setTimeout(() => {
              this.successMessage = { status: null, message: null };
              this.router.navigate(['/cemeteries']);
            }, 3000);
          }
        })
    }
  }

  showmap(id: string): void
  {
     //showmapjs(id);
  }
}
function newFunction(): any {
  return '/cemeteries';
}

