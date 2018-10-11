import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {Location} from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import {UserService} from '../../user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Http} from '@angular/http';
import { datep } from '../../../assets/js/datep';
import * as JQuery from '../../../../node_modules/jquery';
import { isUndefined } from 'util';
import { DomSanitizer } from '@angular/platform-browser';
import { url } from 'inspector';
import { Url } from 'url';
declare var jQuery: any;


export class Right_inter {
  application_date: string;
  fee_charged: string;
  fee_paid: number;
  person_id: string;
  plot_id: string;
  scanned_application: string;
  id: number;
  term_of_right: string;
  applicant:string;
 }

export class Interment {
  interment_date: string;
  interment_type: string;
  person_id: string;
  plot_id: string;
 }

 export class Person {
  dob: string;
  dod: string;
  first_name: string;
  gender: string;
  middle_name: string;
  person_id: string;
  plot_id: string;
  surname: string;
  id: number;
  classification:string;
  intermentid:string;
 }

 export class PlotDetails {
  section: string = '';
  headstone_image: string= '';
  plot_id: string;
  plot_no: string;
  row: string;
  capacity: string;
  headstone: string;
  status: number;
  cemetery_id:string;
 }

  export class Right_Applicant_Data {
    person_id : string;
    email1 : string;
    phone_home : string;
    first_name : string;
    middle_name : string;
    surname : string;
    applicant:string;
    phone_mobile:string;
    pri_street:string;
    pri_suburb:string;
    pri_state:string;
   }

  export class Interested_Person {
    person_id : string;
    email1 : string;
    phone_home : string;
    first_name : string;
    middle_name : string;
    surname : string;
  }
  
  export class Interested_Right {
    date_enquiry : string;
    comments : string;
  }
  export class AddNewPerson {
      person_id;
      cemetery_id;
      plot_id;
      gender;
      title;
      first_name;
      middle_name;
      surname;
      business_name;
      ABN;
      pri_street;
      pri_suburb;
      pri_postcode;
      pri_state;
      pri_country;
      pos_street;
      post_suburb;
      pos_postcode;
      pos_state;
      pos_country;
      phone_mobile;
      phone_home;
      phone_office;
      email1;
      email2;
      religion;
      returned_serviceman;
      dob;
      dod;
      age;
      classification;
      cause_of_death;
      occupation;
      next_of_kin;
      linked_files;
      comments;
      rightofintermentid;
      intermentid;
      cemetry_id;
  }

@Component({
  selector: 'app-plot-details',
  templateUrl: './plot-details.component.html',
  styleUrls: ['./plot-details.component.css'],
})

export class PlotDetailsComponent implements OnInit {
  @ViewChild('btnClose') btnClose : ElementRef;
  fileToUpload: File = null;
  logoutButton: boolean = true;
  IsmodelShow: boolean = false;
  display= 'block';
  imageUrl:Url;
  FuneralList:any[];
  MinisterList:any[];
  nextOFkinList:any[];
  loaderImg:boolean = false;
 
  // status = [
  //   {id: 2, name: "Vacant"},
  //   {id: 1, name: "Reserved"},
  //   {id: 3, name: "Occupied"},
  //   {id: 4, name: "Interest" },
  //   {id: 5, name: "Unavailable" },
  // ];

  status = [
    {id: 1, name: "Vacant"},
    {id: 2, name: "Reserved"},
    {id: 3, name: "Occupied"},
    {id: 4, name: "Interest" },
    {id: 5, name: "Unavailable" },
  ];

testdata = {
gender: "",
title: "",
first_name: "",
middle_name: "",
interment: {
//RightOfIntermentData:{},
cemetery_id:"",
comments:"",
funeral_director:"",
id:"",
interment_date:"",
interment_depth:"",
interment_minister:"",
interment_type:"",
known_location:"",
linked_files:"",
manner_of_burial:"",
//next_of_kin:"",
personData:{},
nextOfKin_Data:{},
person_id:"",
plot_id:"",
section:""
 }
}
  data = Object.assign({},this.testdata);

  testpersonDataforview = {
    "gender": "",
    "title": "",
    "first_name": "",
    "middle_name": "",
    "surname": "",
    "business_name": "",
    "ABN": "",
    "pri_street": "",
    "pri_suburb": "",
    "pri_state": "",
    "pri_country": "",
    "pri_postcode": "",
    "pos_street": "",
    "post_suburb": "",
    "pos_state": "",
    "pos_country": "",
    "pos_postcode": "",
    "Postal": "",
    "phone_mobile": "",
    "phone_home": "",
    "phone_office": "",
    "email1": "",
    "email2": "",
    "age":"",
    "religion": "",
    "returned_serviceman": "",
    "dob": "",
    "dod": "",
    "cause_of_death": "",
    "occupation": "",
    "next_of_kin": "",
    "comments": "",
  }

  personDataforview = Object.assign({},this.testpersonDataforview);

  testAddNewPerson = {
    comments: "",
    cemetery_id:"",
    cause_of_death: "",
    rid:"",
    occupation: "",
    next_of_kin: "",
    religion: "",
    gender: "",
    title: "",
    first_name: "",
    middle_name: "",
    surname: "",
    business_name: "",
    ABN: "",
    pri_street: "",
    pri_suburb: "",
    classification:"",
    pri_state: "",
    pri_country: "",
    pri_postcode: "",
    pos_street: "",
    post_suburb: "",
    pos_postcode: "",
    pos_state: "",
    pos_country: "",
    phone_mobile: "",
    phone_home: "",
    phone_office: "",
    email1: "",
    email2:"",
    age:"",
    dob: "",
    dod: "",
    intermentid: "",
    returned_serviceman:"",
    rightofintermentid: ""
  };
  AddNewPerson = Object.assign({},this.testAddNewPerson);
  

  testAddNewInterment = {
    funeral_director: "",
    interment_minister: "",
    cemetery_id: "",
    next_of_kinFirst: "",
    next_of_kinLast: "",
    interment_type: "",
    interment_depth: "",
    interment_date: "",
    comments: "",
    middle_name:"",
    first_name: "",
    gender: "",
    title: "",
    surname: "",
    pri_street: "",
    pri_suburb: "",
    pri_state: "",
    pri_country: "",
    dob: "",
    dod: "",
    age:"",
    cause_of_death: "",
    occupation: "",
    religion: "",
    returned_serviceman: "",
  }
  AddNewInterment = Object.assign({}, this.testAddNewInterment);

  testAddNewRightInterment = {
    application_date: "",
    right_type: "",
    term_of_right: "",
    fee_charged: "",
    fee_paid: "",
    middle_name: "",
    next_of_kin:"",
    first_name: "",
    gender: "",
    title: "",
    surname: "",
    pri_street: "",
    pri_suburb: "",
    pri_state: "",
    pri_country: "",
    pri_postcode:"",
    email1: "",
    dob: "",
    dod: "",
    age: "",
    cause_of_death: "",
    occupation: "",
    religion: "",
    returned_serviceman: "",
  }
  AddNewRightInterment = Object.assign({}, this.testAddNewRightInterment);

  AddRightOFInterment = {
    applicant: "",
    application_date: "",
    right_type: "",
    term_of_right:"",
    fee_charged:"",
    fee_paid:"",
    plot_id:"",
    id:""  
  }

RightOfIntermentData = {
applicant: "",
applicant_data : {},
application_date: "",
cemetery_id: "",
fee_charged: "",
fee_paid: "",
holder1: "",
holder2: "",
holder3: "",
holders:[],
id: "",
number_rights_holders: "",
plot_id: "",
right_type: "",
scanned_application: "",
term_of_right: "",
};

  addNewInterRightInterment = {
    interested_person:"",
    date_enquiry:"",
    comments:"",
  }
  
  successMessage : object = {};
  cemid:number;
  persondata: any [];
  graveDataforPerson;
  personData;
  right_holders:any[];
  gravedata: PlotDetails;
  person: Person;
  interment:Interment;
  right_inter:Right_inter;
  right_applicant_data:Right_Applicant_Data;
  interested_person:Interested_Person;
  interested_right:Interested_Right;
  param1: string;
  param2: string;
  param3: string;
  param4: string;
  isPersonFormEditable: boolean;
  isPlotFormEditable: boolean; 
  isRightOfIntermentEditable: boolean;
  isIntermentFormEditable: boolean;
  addNewPerson : AddNewPerson;
  userName : string;
  userforName : boolean; false;
  dataFor : string;
  interment_person:any[];
  next_of_kin_data: any[];
  rightIDee:any;
  active:any;
  filetype:string;
  fileerr: boolean =false;
  
  //right_interment1:any[];
  
  constructor(private userService: UserService, private router: Router, private location: Location, private http: Http, private route: ActivatedRoute, private _location: Location, private sanitizer:DomSanitizer) {
  this.route.queryParams.subscribe(params => {
    this.param1 = params['id'];
    this.param2 = params['location'];
    this.param3 = params['cid'];
    this.param4 = params['interId'];
  });
  
  this.cemid = sessionStorage.cemetery_id;
}


ngOnInit() {
  
  if(sessionStorage.length == 3){
    this.logoutButton = false;
  }

  if(sessionStorage['Name'] !== '' && sessionStorage.length == 3 ){
    this.userName=sessionStorage["Name"]
    this.userforName =  true;
  }

  if(sessionStorage.length == 0){
    this.router.navigate(['/']);
  }
  
  this.active = (this.param4 !== '') ? 'active' : '';
  datep();
  this.AllDataIntialize();
  }

  AllDataIntialize(){
    var plot_id= this.param1;
    this.userService.getFirstDataByplotId(plot_id,this.param3).then(res =>{
      this.gravedata = res.json().grave[0];
      this.imageUrl = (res.json().grave[0].headstone_image == '') ? './assets/images/map-image.png' : this.sanitizer.bypassSecurityTrustResourceUrl(res.json().grave[0].headstone_image); 
      this.filetype = this.gravedata.headstone_image.split('.').pop();
    
        this.interment = res.json().interment;
        this.interment_person = res.json().get_interment_person_data;
        this.next_of_kin_data = res.json().next_of_kin_data;

       this.RightOfIntermentData = res.json().right_interment[0];
      if (this.RightOfIntermentData){
        this.rightIDee = this.RightOfIntermentData.id;
      }

        for( var i=0; i < res.json().interment.length ; i++){
          var found1 = this.interment_person.filter(function(e){
            if(e){
            return (e.person_id) == (res.json().interment[i].person_id);  
            }
          });

          var found2 = this.next_of_kin_data.filter(function (e) {
            if (e) {
              return (e.person_id) == (res.json().interment[i].next_of_kin);
            }
          });
  
          if(found1.length){
          this.interment[i]["personData"] = found1[0];
          }

          if (found2.length) {
            this.interment[i]["nextOfKin_Data"] = found2[0];
          }
      }
    });
  }

  
  
  getIntermentDataById(intermentData,type){
  this.data = Object.assign({},this.testdata);  
  //this.AllDataIntialize();
  this.getBussiness(intermentData.cemetery_id,'');
    console.log(intermentData.linked_files);
  if (intermentData.linked_files !== ''){
  this.filetype = intermentData.linked_files.split('.').pop();
  intermentData.linked_files = this.sanitizer.bypassSecurityTrustResourceUrl(intermentData.linked_files);
    console.log(this.filetype); 
}else{
    intermentData.linked_files = './assets/images/map-image.png';
    this.filetype = intermentData.linked_files.split('.').pop();
    console.log(this.filetype);
  }
  this.data.interment = intermentData;
  this.isIntermentFormEditable = type;
 }

 getBussiness(cemetery_id,type){
   if (type !== null || type !== ''){
     this.isIntermentFormEditable = type; 
   }
  this.AddNewInterment = Object.assign({}, this.testAddNewInterment); 
  this.AddNewInterment.cemetery_id = cemetery_id; 
  this.userService.getFuneralData(cemetery_id).then(res =>{
     this.FuneralList = res.json().funeral_director;
     this.MinisterList = res.json().interment_minister;
  });
 }



 getRightOfDataById(rightofinterment,type){
   this.isRightOfIntermentEditable = type;
   this.right_applicant_data = rightofinterment.applicant_data;
   if (rightofinterment.scanned_application !== '') {
     this.filetype = rightofinterment.scanned_application.split('.').pop();
     rightofinterment.scanned_application = this.sanitizer.bypassSecurityTrustResourceUrl(rightofinterment.scanned_application);
   } else {
     rightofinterment.scanned_application = './assets/images/map-image.png';
     this.filetype = rightofinterment.scanned_application.split('.').pop();
   }
   this.right_inter = rightofinterment;
   this.right_holders = rightofinterment.holders;
}

viewrightOfIntermentData(type){
  this.AddNewRightInterment = Object.assign({}, this.testAddNewRightInterment);
  this.isRightOfIntermentEditable = type;
}

forRid(id,cemid){
  this.AddNewPerson = Object.assign({},this.testAddNewPerson);
  this.dataFor = 'Person';
  this.AddNewPerson.rid = id;
  this.AddNewPerson.cemetery_id = cemid;
}

newBusinessFuneral(type,cemid){
  this.AddNewPerson = Object.assign({},this.testAddNewPerson);
  this.dataFor = 'Funeral Director';
  this.AddNewPerson.classification = type;
  this.AddNewPerson.cemetery_id = cemid;
}

newBusinessMinister(type,cemid){
  this.AddNewPerson = Object.assign({},this.testAddNewPerson);
  this.dataFor = 'Interment Minister';
  this.AddNewPerson.classification = type;
  this.AddNewPerson.cemetery_id = cemid;
}

newBusinessKin(type,cemid,interId){
  this.AddNewPerson = Object.assign({},this.testAddNewPerson);
  this.dataFor = 'Next of Kin';
  this.AddNewPerson.classification = type;
  this.AddNewPerson.intermentid = interId;
  this.AddNewPerson.cemetery_id = cemid;
}

getPersonDataForView(person_id,type){ // FETCH PERSON'S DATA BY "plot_id AND person_id".
    this.isPersonFormEditable = type;
    this.personDataforview = Object.assign({},this.testpersonDataforview);
    this.userService.getPersonData1(person_id,this.param1,this.param3).then(res =>{
      // this.isPersonFormEditable = false; // FALSE THIS VARIABLE FOR DISABLED THE ALL INPUT FIELDS.
      this.personDataforview = res.json().person[0];

    });
  }
  
  UpdatePersonData(personDataforviewObj){
     // UPDATE PERSON DATA USING "personDataforview" JSON OBJECT.
    personDataforviewObj['dod'] = (personDataforviewObj['dod'] == '' || personDataforviewObj['dod'] == null) ? personDataforviewObj['dod'] : this.changeDate(personDataforviewObj['dod']);
    personDataforviewObj['dob'] = (personDataforviewObj['dob'] == '' || personDataforviewObj['dob'] == null) ? personDataforviewObj['dob'] : this.changeDate(personDataforviewObj['dob']);

    this.userService.updatePersonData(personDataforviewObj, this.param1, this.param3).then(res =>{
      if(res.status == 200){
        this.successMessage = { status : 200, message : "Update Person Data Successfully." };
        setTimeout (() => { 
          this.successMessage = { status : null, message : null };
          this.IsmodelShow=true;
          location.reload(); 
        }, 3000);
      }else{
        this.successMessage = { status : 500, message : "Somthing went wrong!  Please try again." };
        setTimeout (() => { 
          this.successMessage = { status : null, message : null };
          this.IsmodelShow=true;
          location.reload(); 
        }, 3000);
      }
    });
}

  AddRightOfIntermentData(AddNewRightIntermentObj){
  
    this.AddNewRightInterment["plot_id"] = this.param1;
    this.AddNewRightInterment["cemetery_id"] = this.gravedata.cemetery_id;


    AddNewRightIntermentObj['dod'] = (AddNewRightIntermentObj['dod'] == '' || AddNewRightIntermentObj['dod'] == null) ? AddNewRightIntermentObj['dod'] : this.changeDate(AddNewRightIntermentObj['dod']);


    AddNewRightIntermentObj['dob'] = (AddNewRightIntermentObj['dob'] == '' || AddNewRightIntermentObj['dob'] == null) ? AddNewRightIntermentObj['dob'] : this.changeDate(AddNewRightIntermentObj['dob']);


    AddNewRightIntermentObj['application_date'] = (AddNewRightIntermentObj['application_date'] == '' || AddNewRightIntermentObj['application_date'] == null) ? AddNewRightIntermentObj['application_date'] : this.changeDate(AddNewRightIntermentObj['application_date']);


    this.userService.addNewRightInterment(AddNewRightIntermentObj).then(res =>{
    if(res.status == 200){
      //this.btnClose.nativeElement.click();
      this.successMessage = { status : 200, message : "Right Of Interment Added Successfully." };
      location.reload();
      //this.IsmodelShow=true;
    }else{
      //this.btnClose.nativeElement.click();
      this.successMessage = { status : 500, message : "Somthing went wrong! Please try again." };
      location.reload();
      //this.IsmodelShow=true;
    }
    setTimeout (() => { this.successMessage = { status : null, message : null, }; }, 3000);
  });
}
  
  updatePlotData(){ // UPDATE PLOT DATA USING "gravedata" JSON OBJECT.
  this.userService.editPlotDataDetail(this.gravedata).then(res =>{
      if(res.status == 200){
        this.successMessage = { status : 200, message : "Update plot's Data Successfully." };
      }else{
        this.successMessage = { status : 500, message : "Somthing went wrong! Please try again." };
      }
      setTimeout (() => { this.successMessage = { status : null, message : null, };location.reload(); }, 3000);
    });
  }

  updateRightOfIntermentData(right_interObj){ // UPDATE PLOT DATA USING "gravedata" JSON OBJECT.
    this.isRightOfIntermentEditable = false;

    right_interObj['application_date'] = (right_interObj['application_date'] == '' || right_interObj['application_date'] == null) ? right_interObj['application_date'] : this.changeDate(right_interObj['application_date']);


    this.userService.updateRightOfIntermentData(right_interObj,this.param1).then(res =>{
      if(res.status == 200){
        this.successMessage = { status : 200, message : "Update Right Of Interment Successfully." };
        setTimeout (() => { 
          //this.btnClose.nativeElement.click();
          this.successMessage = { status : null, message : null };
          location.reload();
         }, 3000);
      }else{
        this.successMessage = { status : 500, message : "Somthing went wrong! Please try again." };
        setTimeout (() => { 
          //this.btnClose.nativeElement.click();
          this.successMessage = { status : null, message : null };
          location.reload();
         }, 3000);
      }
      // console.log("right_inter plots's data: ", res);
    });
  }

  updateIntermentData(data_intermentObj,personId){ // UPDATE PLOT DATA USING "gravedata" JSON OBJECT.
    this.isIntermentFormEditable = false;
    data_intermentObj.interment_date = (data_intermentObj.interment_date == '' || data_intermentObj.interment_date == null) ? data_intermentObj.interment_date : this.changeDate(data_intermentObj.interment_date); 

    this.userService.updateIntermentData(data_intermentObj, personId, this.param1).then(res =>{
      if(res.status == 200){
        this.successMessage = { status : 200, message : "Update Interment Data Successfully."};
        setTimeout (() => { 
          this.successMessage = { status : null, message : null };
          //this.btnClose.nativeElement.click();
          //this.IsmodelShow = true; 
          location.reload();
        }, 3000);
      } else {
        this.successMessage = { status : 500, message : "Somthing went wrong! Please try again."};
        setTimeout (() => { 
          this.successMessage = { status : null, message : null };
          //this.btnClose.nativeElement.click();
          //this.IsmodelShow = true;
          location.reload();
        }, 3000);
      }
    });
  }
  
addNewPersonData(newPersonObj,conn,cemetery_id){ // ADD NEW PERSON.
newPersonObj["plot_id"] = this.param1;
newPersonObj["addType"] = conn;

  newPersonObj["dod"] = (newPersonObj["dod"] == '' || newPersonObj["dod"] == null) ? newPersonObj["dod"] : this.changeDate(newPersonObj["dod"]);

  newPersonObj["dob"] = (newPersonObj["dob"] == '' || newPersonObj["dob"] == null) ? newPersonObj["dob"] : this.changeDate(newPersonObj["dob"]);

if(conn == 'Person'){
    this.userService.addNewPersonData(newPersonObj).then(res =>{
      if(res.status == 200){
        this.successMessage = { status : 200, message : "New Person Added Successfully." };
        setTimeout (() => {
          this.getBussiness(cemetery_id,'');
          this.successMessage = { status: null, message: null };
          jQuery('#addNewPerson').modal('hide');
         }, 3000);
      }else{
        this.successMessage = { status : 500, message : "Somthing went wrong! Please try again.", };
        setTimeout (() => { 
          this.getBussiness(cemetery_id, '');
          this.successMessage = { status: null, message: null };
          jQuery('#addNewPerson').modal('hide');
        }, 3000);
      }
    });
  }
  else{
    this.userService.AddBusinessData(newPersonObj).then(res =>{
      if(res.status == 200){
        this.successMessage = { status : 200, message : "New "+conn+" Added Successfully." };
        setTimeout (() => {
          this.successMessage = { status : null, message : null };
          this.getBussiness(cemetery_id,true);
          jQuery('#addNewPerson').modal('hide');
         }, 3000);
      }else{
        this.successMessage = { status : 500, message : "Somthing went wrong! Please try again.", };
        setTimeout (() => {
          this.successMessage = { status : null, message : null };
          this.getBussiness(cemetery_id,true);
          jQuery('#addNewPerson').modal('hide');
        }, 3000);
      }
    }); 
  }
}

  addIntermentData(newIntermentObj){
    newIntermentObj["plot_id"] = this.param1;
    newIntermentObj["cemetery_id"] = this.gravedata.cemetery_id;

    newIntermentObj["interment_date"] = (newIntermentObj["interment_date"] == '' || newIntermentObj["interment_date"] == null) ? newIntermentObj["interment_date"] : this.changeDate(newIntermentObj["interment_date"]);

    newIntermentObj["dod"] = (newIntermentObj["dod"] == '' || newIntermentObj["dod"] == null) ? newIntermentObj["dod"] : this.changeDate(newIntermentObj["dod"]);

    newIntermentObj["dob"] = (newIntermentObj["dob"] == '' || newIntermentObj["dob"] == null) ? newIntermentObj["dob"] : this.changeDate(newIntermentObj["dob"]);

    newIntermentObj["rightofintermentid"]= this.rightIDee;

    this.userService.addNewInterment(newIntermentObj).then(res =>{
      if(res.status == 200){
        this.successMessage = { status : 200, message : "New Interment Added Successfully." };
        setTimeout (() => { 
          location.reload();
         }, 3000);
      }else{
        this.successMessage = { status : 500, message : "Somthing went wrong! try again.", };
        setTimeout (() => { 
         location.reload(); 
        }, 3000);
      }
    });
  }
  
  addNewInterRightIntermentData(obj){ // ADD NEW INTERESTED RIGHT INTERMENT.
    // console.log("addNewPerson: ", JSON.stringify(obj));
    this.userService.addNewInterRightIntermentData(obj).then(res =>{
      if(res.status == 200){
        this.successMessage = { status : 200, message : "Interested in Right Added Successfully.", };
        setTimeout (() => { 
          this.btnClose.nativeElement.click();
          this.successMessage = { status : null, message : null };
         }, 3000);
      }else{
        this.successMessage = { status : 500, message : "Somthing went wrong! Please try again.", };
        setTimeout (() => { 
          this.btnClose.nativeElement.click();
          this.successMessage = { status : null, message : null };
         }, 3000);
      }
      // console.log("interment plots's data: ", res);
    });
  }
  
  handleFileInput(files: FileList,tablename,id) {
    if (files.length){
      this.loaderImg = true;
      this.fileToUpload = files.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);

      this.userService.postFile(tablename, id, this.param1, this.fileToUpload).subscribe(data => {

        if (data.status == 200) {
          this.successMessage = { status: 200, message: "Image Uploaded Successfully.", };
          setTimeout(() => {
            this.successMessage = { status: null, message: null, };
            this.loaderImg = false;
            if (tablename == 'interment') {
              jQuery('#ViewInterment').modal('hide');
            } else if (tablename == 'right_interment') {
              jQuery('#RightOfInterment').modal('hide');
            }
            this.AllDataIntialize();
          }, 3000);
        } else {
          this.successMessage = { status: 500, message: "Somthing went wrong! Please try again.", };
          setTimeout(() => {
            this.successMessage = { status: null, message: null, };
            this.loaderImg = false;
            //this.AllDataIntialize();
          }, 3000);
        }
      }, error => {
        console.log(error);
      }); 
    }else{
      this.fileerr = true;
      setTimeout(() => {
        this.fileerr = false;
      }, 3000);
    }

  }

  logoutSession(){
		sessionStorage.clear();
		this.router.navigate(['/home']);
  }
  
  backClicked() {
    this._location.back();
}

alert(){
  const isConfirmed = confirm('Are you sure you want to proceed? All data you have entered will be lost');
  //console.log(JQuery);
  if (isConfirmed) {
    if(this.isPlotFormEditable){
      this.isPlotFormEditable = false;
      location.reload();
    }
    JQuery(".dismis").attr("data-dismiss","modal");
  }else{
    JQuery(".dismis").removeAttr("data-dismiss","modal");
    return false;
  }
}

changeDate(val){

if(val.length <= 10 ){
return val;  
}else{  
  var date = (val.getDate().length > 1) ? val.getDate() : '0'+val.getDate();
  var mon = (val.getMonth().length > 1) ? parseInt(val.getMonth() + 1) : '0'+parseInt(val.getMonth() + 1);
  return date + '/' + mon + '/' + val.getFullYear();
}
}
}
