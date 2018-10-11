import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import {UserService} from '../../user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import {Http} from '@angular/http';



@Component({
  selector: 'app-cemetery-owner-edit',
  templateUrl: './cemetery-owner-edit.component.html',
  styleUrls: ['./cemetery-owner-edit.component.css']
})
export class CemeteryOwnerEditComponent implements OnInit {
userAddForm: FormGroup;
user: any;
cemeteryname: any;
selectedItem: any;
successMessage: object = {};
selectVal;
constructor(private userService:UserService , private router: Router, private location: Location,
             private formBuilder: FormBuilder, private http:Http,private route:ActivatedRoute ) { 

  }

  ngOnInit(): void {
    this.selectVal = 'Select Your Area'
    var userid = sessionStorage.getItem('id');
    if(userid == null){
      this.router.navigate(['/login']);  
    }
  	var id= this.route.snapshot.params;
  	this.userService.getUpdateUser(id).then(res =>{
      this.user = res.json();
      this.buildForm();
    });
    this.CemeteryName();

  }

  CemeteryName(): void
  {
     this.userService.CemeteryName().then(res =>{
     this.cemeteryname = res.json();
    });
  }
  

  buildForm(): void
  {
  	 this.userAddForm = this.formBuilder.group({
  	  fname: ['', Validators.required],
  	  lname: ['', Validators.required],
  	  cemeteryarea:	'', 
  	  userid:	'', 
  	  email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
  	  
  	 });
  }

  update(): void
  {
  	let user1 = this.userAddForm.value as User;
  //  console.log(user1);
  	this.userService.updateUser(user1)
  	.then(res =>{

      if (res) {
        this.successMessage = { status: true, message: 'Owner Edited successfully' };
        setTimeout(() => {
          this.successMessage = { status: null, message: null };
          this.router.navigate(['/cemetery-owners']);
        }, 3000);
      } else {
        this.successMessage = { status: false, message: 'Something Went Wrong. Plese try again' };
        setTimeout(() => {
          this.successMessage = { status: null, message: null };
          this.router.navigate(['/cemetery-owners'])
        }, 3000);
      }
  	}) 
  }

}
