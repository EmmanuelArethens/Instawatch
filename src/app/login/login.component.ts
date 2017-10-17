import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  connected:boolean = false;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.username, this.password).subscribe(logged => this.connected = logged);
  }

  logoout(){
    this.auth.logout;
    this.connected = false;
  }
}
