// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// import { Observable } from 'rxjs';
// import { User } from '../model/user';
// import { UserService } from './user.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserResolverService implements Resolve<Promise<User>> {

//   constructor(private userService:UserService) { }
//   resolve(route: ActivatedRouteSnapshot): Promise<User> {
//     const { userName } = route.params
//     console.log('userName',userName);
    
//      return this.userService.getUser(userName)
//   }
// }
