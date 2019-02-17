import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canLoad: [AuthService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
