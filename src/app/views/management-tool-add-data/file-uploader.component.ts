import { Component, EventEmitter, OnInit, Output, ViewChild, Input, HostBinding } from '@angular/core';
import { FileQueueObject, FileUploaderService, FileQueueStatus } from './file-uploader.service';
import {UserService} from '../../user.service';
import { Observable } from 'rxjs/Observable';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'file-uploader, [file-uploader]',
  templateUrl: 'file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})

export class FileUploaderComponent implements OnInit {
  
  @Output() onCompleteItem = new EventEmitter();
  @ViewChild('fileInput') fileInput;
  beforeselect:boolean = false;

  queue: Observable<FileQueueObject[]>;
  
  constructor(public uploader: FileUploaderService ,public router:Router) { }

  ngOnInit() {
    
    this.queue = this.uploader.queue;
    this.uploader.onCompleteItem = this.completeItem;
   }

  completeItem = (item: FileQueueObject, response: any) => {
    this.onCompleteItem.emit({ item, response });
  }

  addToQueue() {
    if (this.uploader.cemid !== undefined){
    var userid = sessionStorage.getItem('id');
    const fileBrowser = this.fileInput.nativeElement;
    this.uploader.addToQueue(fileBrowser.files,userid);
  } else {
    this.beforeselect = true;
    setTimeout(() => {
      this.fileInput.nativeElement.value = "";
      this.beforeselect = false;  
    }, 4000);
  }
  }


  myuploadAll() {
    var userid = sessionStorage.getItem('id');
    this.uploader.uploadAll(userid);
   }
}