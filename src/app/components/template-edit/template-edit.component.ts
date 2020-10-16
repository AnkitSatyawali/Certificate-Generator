import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';

import { NotifyService } from "../../services/notify.service";

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
})
export class TemplateEditComponent implements OnInit {

  constructor(private router : Router,private notifyService : NotifyService) { }
imageurl="";
loader=false;
recipientName="";
  ngOnInit() {
  	this.imageurl=this.notifyService.getTemplate();
  	if(this.imageurl)
      console.log(this.imageurl);
    else
      this.router.navigate(['/home']);
  }
  onSubmit(form:NgForm)
  {
    this.loader=true;
  	console.log(form.value);
    let obj = {
      image:this.imageurl,
      name: form.value.recipientName
    };
    console.log(obj);
    this.notifyService.saveCertificate(obj);
    var data = document.getElementById('pl');
  html2canvas(data).then(canvas => {
  // Few necessary setting options
  var imgWidth = 208;
  var pageHeight = 295;
  let obj = {
    image:this.imageurl,
    name: form.value.recipientName
  };
  console.log(obj);
  this.notifyService.saveCertificate(obj);
  var data = document.getElementById('pl');
  console.log(data); 
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
  const contentDataURL = canvas.toDataURL('image/png')
   console.log(contentDataURL)
   this.notifyService.uploadCertificate(contentDataURL).subscribe(d => {
    console.log(d);
    this.notifyService.saveFileName(d.name);
    this.router.navigate(['/send-certificate']);
    this.loader=false;
  });
    });
      
  }

}
