import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first, mapTo, Observable, of, switchMap } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataUserGuard implements CanActivate {
  constructor(private authService:AuthService){}
  canActivate():Observable<true>{
    return this.authService.user$.pipe(
      first(),
      switchMap((user:User| null):Observable<true>=>{
        if(!user){
          return this.authService.fetchCurrentUser().pipe(mapTo(true))
        }else{
          return of(true);
        }
      })
    );
  }
  
}
