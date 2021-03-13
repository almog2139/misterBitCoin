import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoggdinUser } from 'src/app/model/loggdinUser';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
@Output () onShowPage=new EventEmitter<boolean>()
  constructor(private userService: UserService, private router: Router) { }
   user={
     userName:'',
     pass:''
     
   }
  msg=''
  isContactExists:boolean

  ngOnInit(): void {
  }
  onAddUser() {
    console.log('addUser');
    if (this.user.userName &&this.user.pass) {
      const isContactExists=this.userService.signUp(this.user)
      if (isContactExists)this.onShowPage.emit(true)
      else{
         this.msg='This username already exists try another name '
         setTimeout(() => {
          this.msg = ''
        }, 1500)
      }
    }
  }
  onSignIn(){
    const isContactExists=this.userService.signIn(this.user)
      if (isContactExists)this.onShowPage.emit(true)
      else{
         this.msg='This username not exists try again '
         setTimeout(() => {
          this.msg = ''
        }, 1500)
      }
  }

}
