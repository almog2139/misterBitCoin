import { isNgTemplate } from '@angular/compiler'
import {Injectable} from '@angular/core'
import {Actions,createEffect,ofType} from '@ngrx/effects'
import {EMPTY} from 'rxjs'
import {map,catchError,switchMap,tap} from 'rxjs/operators'
import { UserService, userService } from '../services/user.service'
import * as userActions from './actions/user.actions'

@Injectable()
export class AppEffects{
loadUser$=createEffect(()=>{
    return this.actions$.pipe(
        ofType(userActions.LOAD_USER),
        tap(()=>console.log('here')),
        switchMap((action)=>
        this.userService.getContactMoves(action.payload).pipe(
            tap(()=>
                console.log('grg')
            ),
            map((user)=>({
                type:userActions.LOAD_USER,
                payload:user,

            })),
            catchError(()=>EMPTY)
        )
        )
    )
})

constructor(private userService:UserService,public payload:any|null){}
}