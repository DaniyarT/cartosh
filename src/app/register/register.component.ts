import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  firstName = '';
  lastName = '';
  allowNewUser = false;
  userCreationStatus = '';
  userStatus = 'offline';
  userName = '';

  getUserStatus() {                 //useful and easy example of method
    return this.userStatus;         
  }
  
    constructor() { 
      setTimeout(() => {
        this.allowNewUser = true;
      }, 2500);
    }

onCombineNames() {
  this.userName = 'User ' + this.firstName + this.lastName + ' has been created';
}
  
    onUpdateFirstName(event: any) {
      this.firstName = event.target.value;
    }

  ngOnInit() {
  }

}
