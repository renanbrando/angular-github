import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../login/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) { }

  getRepositories() : Observable<any>{
    return this.http.get('https://api.github.com/user/repos', {
      headers: {
        'Content-Type': 'application/json; charsert=utf-8',
        'Accept': 'application/json',
        'Authorization': `token ${this.authService.getAccessToken()}`
      } 
    });
  }
}
