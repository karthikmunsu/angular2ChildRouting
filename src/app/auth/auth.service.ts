import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router : Router) {}

  canActivate() : boolean {
    console.log('auth guard fired!');
    if (sessionStorage.getItem('username') !== null && sessionStorage.getItem('username') !== undefined) {
      return true;
    } else {
      this
        .router
        .navigate(['login']);
      return false;
    }
  }

}