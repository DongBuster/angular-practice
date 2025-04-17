import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from 'src/app/interface/token';
import { User } from 'src/app/interface/user';


@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http:HttpClient){}
  login(data:{username:string, password:string}): Observable<Token>{
    return this.http.post<Token>('https://dummyjson.com/auth/login',data);
  }
  register():Observable<User>{
    return this.http.get<User>('https://dummyjson.com/users/add');
  }
}