import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  allowNewUser = false;
  userCreationStatus = '';
  userStatus = 'offline';

  getUserStatus() {                 //useful and easy example of method
  return this.userStatus;         
}

  constructor() { 
    setTimeout(() => {
      this.allowNewUser = true;
    }, 500);
  }

  onLogin() {
    this.userCreationStatus = 'You logged in!!!'
  }

  ngOnInit() {
  }

}
