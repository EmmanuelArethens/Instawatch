import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
  urlApi= "http://localhost:3000/user";
  user: User;

  constructor(private http:HttpClient) {}

  login(name:string, password:string):Observable<boolean>{
    return this.http.get<User[]>(this.urlApi+'?username='+name+'+&password='+password)
    .map((users) => {
      if(users.length === 1) {
        this.user = users [0];
        return true;
      }
    })
  }
  
  logout():void {
    this.user = null;
  } 
}



