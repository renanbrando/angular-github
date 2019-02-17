import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanLoad {

  constructor(private router: Router, private authService: AuthenticationService) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.hasAccessToken()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
