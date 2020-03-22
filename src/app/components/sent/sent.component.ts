import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../services/notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  constructor(private notifyService:NotifyService,private router:Router) { }

  ngOnInit() {
  	let name = this.notifyService.getFileName();
  	if(name)
  		console.log("good")
  	else
  		this.router.navigate(['/home']);

  }

}
