//import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx';
import { Component,OnInit } from '@angular/core';
import { User } from '../../user';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import {Http} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

     userAddForm: FormGroup;
     emailcookie: string;
     passwordcookie:string;
     check: string;
     successMessage: object = {};
	 constructor( private userService:UserService, private router: Router, private location: Location,
             private formBuilder: FormBuilder, private http:Http,private cookieService:CookieService) {
   this.buildForm();
 };

	ngOnInit()
	{
    var email=this.cookieService.get('Email');
    var password=this.cookieService.get('Password');

    if(email !='' && password !='')
    {
       this.emailcookie= this.cookieService.get('Email');
       this.passwordcookie= this.cookieService.get('Password');
       this.check= 'checked';
    }
   
  //  var userid = sessionStorage.getItem('id');
  //  if(userid == null){
  //    this.router.navigate(['/']);
     
  //  } else {
  //    this.router.navigate(['/dashboard']);
  //  } 
	}

	 buildForm(): void {
   this.userAddForm = this.formBuilder.group({
     password: ['', Validators.required],
     email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
   });
 }

 adminLogin(): void{
  let user = this.userAddForm.value;
  this.userService.loginUser(user)
  .then(res =>{
      if(res==null){
        this.successMessage = { status: 500, message: "Invalid Email OR password !" };
        setTimeout(() => {
          this.successMessage = { status: null, message: null };
        },4000);
      } else {
         sessionStorage.setItem('id', res[0].id);
        this.successMessage = { status: 200, message: "Login Successfully. Redirecting..." };
        setTimeout(() => {
          this.successMessage = { status: null, message: null };
          this.router.navigate(['/dashboard']);
        }, 4000);
      }
  })
 }  

 isChecked(remember): void
 {
    if(remember==1)
    {
      let userdata = this.userAddForm.value as User;
      if(userdata.email !='' && userdata.password !='')
      {
         this.cookieService.set('Email',userdata.email);
         this.cookieService.set('Password',userdata.password);
      }
     
    }
 }

}