import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private router:Router,private http:HttpClient) { 
      }
      httpOptions = {
    headers: new HttpHeaders({

      'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'

    })
  };

  private template = new Subject<string>();

  tempSelected = this.template.asObservable();
  imageSelected="";
  certiInfo;
  filename;
  emitTemplate(templates:string)
  {
  	console.log(templates);
  	this.imageSelected = templates;
  	this.template.next(templates);
  }
  saveCertificate(info)
  {
    this.certiInfo = info;
  }
  getTemplate()
  {
  	return this.imageSelected;
  }
  getSavedCertificate()
  {
    return this.certiInfo;
  }
  saveFileName(filename)
  {
    console.log(filename);
    this.filename = filename.slice(0,-4);
  }
  getFileName()
  {
    return this.filename;
  }
  uploadCertificate(certificate)
  {
    // const fd = new FormData();
    // fd.append('image',certificate);
    const obj = {
      'base64image':certificate
    };
    console.log(obj)
    return this.http.post<any>('https://certigen-backend.herokuapp.com/upload/uploadCerti',obj);
  }
  sendMail(email,filenamei)
  {
    console.log(email);
    console.log(filenamei);
    return this.http.post<any>('https://certigen-backend.herokuapp.com/upload/convertToPDF',{email:email,name:this.filename})
  }
}
