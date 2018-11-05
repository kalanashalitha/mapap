import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { UserService } from './user.service'

declare const gapi:any
@Component({
  selector: 'app-login',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UserService ]
})
export class UserComponent implements OnInit {
  
  private userName
  private userIdToken
  private googleAuthObject
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    
  }

  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => { 
      this.auth2 = gapi.auth2.init({
        client_id: '968290368770-41286pviqm741nh77i2e7bcvc81p45qd.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      }).then((googleAuthObject) => {
        this.googleAuthObject = googleAuthObject
        let options = new gapi.auth2.SigninOptionsBuilder();
        options.setAppPackageName('com.web.mapap');
        options.setPrompt('select_account');
        options.setScope('profile').setScope('email');
        this.googleAuthObject.signIn(options)
        .then(googleUser => this.authenticateUser(googleUser))
      },
      (e)=>{ 
        console.log(e)
      })
      //this.attachSignin(document.getElementById('google-login-button'));
    });
  }

  authenticateUser(loggedInUser) {
    this.userIdToken = loggedInUser.getAuthResponse().id_token;
    this.userName = loggedInUser.getBasicProfile().getName();
    this.userService.authenticateUser(this.userIdToken).subscribe((_:any)=>{
      console.log(_)
    })
  }

  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  private login(){
    this.googleInit();
  }
}
