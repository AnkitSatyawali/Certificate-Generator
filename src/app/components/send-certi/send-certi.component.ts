import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl, Validators } from '@angular/forms';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

import { NotifyService } from "../../services/notify.service";

@Component({
  selector: 'app-send-certi',
  templateUrl: './send-certi.component.html',
  styleUrls: ['./send-certi.component.css']
})
export class SendCertiComponent implements OnInit {
certificate;
filenamei;
loader=false;

  constructor(private router:Router,private notifyService:NotifyService) { }

  ngOnInit() {
  	this.certificate=this.notifyService.getSavedCertificate();
    this.filenamei = this.notifyService.getFileName();
    if(this.filenamei)
      console.log('good');
    else
      this.router.navigate(['/home']);
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  sent(){
    console.log(this.email);
    this.loader=true;
    this.notifyService.sendMail(this.email.value,this.filenamei).subscribe(data =>{
      console.log(data);
      this.loader=false;
      this.router.navigate(['/certificate-sent']);
    })
  }
}
