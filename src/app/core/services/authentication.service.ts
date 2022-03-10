import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostSignIn, Signin } from '../models/Signin';
import { Signup } from '../models/Signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url:string=environment.baseUrl;
  constructor(private http:HttpClient) { }

  login(loginReq:Signin):Observable<PostSignIn>{
    return this.http.post<PostSignIn>(this.url+`/auth/login`,loginReq);
  }

  signup(signupReq:Signup):Observable<any>{
    return this.http.post(this.url+`/auth/signup`,signupReq,{responseType:'text'});
  }

}
