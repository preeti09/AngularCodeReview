import { Component, OnInit } from '@angular/core';
import { FileQueueObject, FileUploaderService } from './file-uploader.service';
import { UserService } from '../../user.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-tool-add-data',
  templateUrl: './management-tool-add-data.component.html',
  styleUrls: ['./management-tool-add-data.component.css']
})
export class ManagementToolAddDataComponent implements OnInit {
  count = 0;
  IsLoaderShow:boolean = false;
  successMessage: object = {};
  toolForm: FormGroup;
  user: any[];
  imploaddata: any[];
  data: any[];
  afterSelect: boolean = false;
  selectedValue;
  
  constructor(private router: Router, public uploader: FileUploaderService, public userService: UserService) {
    console.log(this.uploader.cemid);
  };
 
  
   ngOnInit() {
    var userid = sessionStorage.getItem('id');
    if(userid == null){
      this.router.navigate(['/login']);  
    }

     this.selectedValue = 'Select Your Area';
     this.userService.CemeteryName().then(res => {
       this.user = res.json();
     });

     this.toolForm = new FormGroup({
       cemeteryarea: new FormControl()
     });

    
   }

  onCompleteItem($event) {
    var len = this.uploader._files.length;
    if($event.response){
    this.count++;
      if (this.count == len) {
        this.IsLoaderShow = false;
        this.uploader.clearQueue();
        this.successMessage = { status: true, message: "Files Uploaded Successfully." };
        this.cemeteryDataById();
        setTimeout(() => {
          this.successMessage = { status: null, message: null };
        }, 4000); 
      }
    }
  }

  cemeteryDataById() {
    const cemid = this.toolForm.value.cemeteryarea;
    this.uploader.cemid = cemid;
    if (cemid !== 'Select Your Area') {
      this.afterSelect = true;

      var userid = sessionStorage.getItem('id');
      this.userService.getDataresultById(userid, cemid).then(res => {
        this.imploaddata = res.json();
      });
    } else {
      this.afterSelect = false;
    }
  }


  userDelete(id) {
    var id = id;
    const cemid = this.toolForm.value.cemeteryarea;
    var userid = sessionStorage.getItem('id');
    this.userService.deleteRecord(id, userid, cemid).then(res => {
    this.imploaddata = res.json();
    });
  }

  importData(cemid, filename, url, tbl_name) {
    this.IsLoaderShow = true;
    this.userService.getimportData(cemid, filename, url, tbl_name).then(res => {
      if (res.json().status == true) {
        this.IsLoaderShow = false;
        this.successMessage = { status: true, message: "Data Imported Successfully." };
        setTimeout(() => {
          this.successMessage = { status: null, message: null };
        }, 3000);
      } else {
        this.IsLoaderShow = false;
        this.successMessage = { status: false, message: "Somthing went wrong!  Please try again." };
        setTimeout(() => {
          this.successMessage = { status: null, message: null };
        }, 3000);
      }
    });
  }
}
