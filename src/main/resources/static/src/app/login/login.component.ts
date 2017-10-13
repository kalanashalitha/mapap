import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private name:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  private login(){
  	console.log(this.name);
  	this.name = "kalana";
  	this.router.navigate(['home']);
  }

}
