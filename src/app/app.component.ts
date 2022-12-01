import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './core/model/user.model';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stagiClient';
  public isLoggedin$: Observable<boolean> = this.authService.isLoggedin$.asObservable();

  public logout(){
    console.log("hello logout");
    
    this.authService.logout().subscribe(
      ()=>{
        this.router.navigateByUrl('/connexion')
      }
    )
  }

  constructor(private authService:AuthService,private router:Router){}



}
