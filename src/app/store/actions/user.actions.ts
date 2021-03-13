import {Action} from '@ngrx/store'

export const LOAD_USER='[Brain-app cmp] load user'

export class loadUser implements Action {
    readonly type=LOAD_USER;
    constructor(public payload:any|null){}
}
export type All=loadUser