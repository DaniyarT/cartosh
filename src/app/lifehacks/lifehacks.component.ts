import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifehacks',
  templateUrl: './lifehacks.component.html',
  styleUrls: ['./lifehacks.component.scss']
})
export class LifehacksComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;

getServerStatus() {                 //useful and easy example of method
  return this.serverStatus;         
}

  constructor() {                   //
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1500);
  }

  onCreateServer() {
    this.serverCreated = true;
    // this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  ngOnInit() {
  }

}
