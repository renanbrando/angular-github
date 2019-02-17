import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  username: string;

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private authService: AuthenticationService
  ) {

  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => { 
      let code = params.code;
      this.authService.getGitToken(code).subscribe(token => {
        if (token.access_token){
          this.authService.setAccessToken(token.access_token);
          this.route.navigate(['home']);
        }
      });
    });
  }

  login() {
    window.location.href = `https://github.com/login/oauth/authorize?login=${this.username}&client_id=94fe6754276184e30058`
  }
}