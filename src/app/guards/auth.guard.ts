import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Injectable()
export class AuthGuard {
  constructor(private authService : AuthService,
              private router : Router) {
  }
  canActivate (
    route :ActivatedRouteSnapshot,
   state:RouterStateSnapshot):MaybeAsync<GuardResult>{
    if(this.authService.isAuthenticated){
      return true;
    }else {
      this.router.navigateByUrl('/login')
     return false;
     }

  }

}
