import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  hasAccessToken(){
    return !!this.getAccessToken();
  }

  setAccessToken(token){
    sessionStorage.setItem("access_token", token);
  }
  
  getAccessToken(){
    return sessionStorage.getItem("access_token");
  }

  clearAccessToken(){
    return sessionStorage.clear();
  }

  getGitToken(code: string): Observable<any> {
    return this.http.post(`https://floating-bayou-20059.herokuapp.com/https://github.com/login/oauth/access_token`,
    {
      'client_id': '94fe6754276184e30058',
      'client_secret': '0b19bffa9fad501c4e9195c25abb7f1739187965',
      'code': code
    }, {
      headers: {
        Accept: 'application/json'
      }
    }).pipe(tap(res => {
      return res;
    }))
  }
}
