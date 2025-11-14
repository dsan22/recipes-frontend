import { Component } from '@angular/core';
import { User } from '../../../../types';
import { RouterModule,Router } from '@angular/router';
import { routes } from '../../../app.routes';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {  
  user:User|null=null;
  
  constructor(private router:Router,private authService:AuthService){}

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  login() {
    this.router.navigate(["login"])
  }

  logout() {
    this.authService.logout();
  }

}
