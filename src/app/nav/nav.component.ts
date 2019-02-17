import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'Angular Github';
  
  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.clearAccessToken();
    this.route.navigate(['login']);
  }

}
