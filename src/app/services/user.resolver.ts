import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.userService.getUser(route.paramMap.get('id')!);
  }
}
