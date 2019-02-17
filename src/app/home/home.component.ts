import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private repositories: [];

  constructor(private authService: AuthService, private reposService: RepositoriesService) { 
  
  }

  ngOnInit() {
    this.getRepositories();
  }

  getRepositories(){
    this.reposService.getRepositories().subscribe(repos =>{
      this.repositories = repos;
    });
  }

}
