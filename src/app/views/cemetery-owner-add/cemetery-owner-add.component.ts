import { Observable } from 'rxjs/Rx';
import { Component,OnInit } from '@angular/core';
import { User } from '../../user';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import {Http} from '@angular/http';



@Component({
  selector: 'app-cemetery-owner-add',
  templateUrl: './cemetery-owner-add.component.html',
  styleUrls: ['./cemetery-owner-add.component.css']
})
export class CemeteryOwnerAddComponent implements OnInit {

 userAddForm: FormGroup;
 action:  string;
 user: any [];
successMessage: object = {};

  constructor( private userService:UserService, private router: Router, private location: Location,private formBuilder: FormBuilder, private http:Http) {
  		this.buildForm();
  };

 
  ngOnInit() {
    var userid = sessionStorage.getItem('id');
    if(userid == null){
      this.router.navigate(['/login']);  
    }
    this.userService.CemeteryName().then(res =>{
    this.user = res.json();
    });
  }

  buildForm(): void
  {
  	
  	 this.userAddForm = this.formBuilder.group({
  	 
  	 fname: ['', Validators.required],
     lname: ['', Validators.required],
     email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
     password:['', Validators.required],
     cemeteryarea:['', Validators.required]

  	 })
  }
  addUser(): void{

   let user= this.userAddForm.value as User;
   this.userService.addUser(user)
   .then(res => {

     if (res) {
       this.successMessage = { status: true, message: 'Data added successfully' };
       setTimeout(() => {
         this.successMessage = { status: null, message: null };
         this.router.navigate(['/cemetery-owners'])
       }, 3000);
     } else {
       this.successMessage = { status: false, message: 'Something Went Wrong. Plese try again' };
       setTimeout(() => {
         this.successMessage = { status: null, message: null };
         this.router.navigate(['/cemetery-owner-add'])
       }, 3000);
     }
   })
  }
}
