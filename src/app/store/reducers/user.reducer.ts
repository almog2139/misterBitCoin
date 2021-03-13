import * as UserActions from '../actions/user.actions'
import { User } from 'src/app/model/user'


export type Action = UserActions.All;
export interface State {
    user: User;
}

const initialState: State = {
    user: null
}
export function reducer(state: State = initialState, action: any): State {
    switch (action.type) {
        case UserActions.LOAD_USER:
            return { user: action.payload }
        default:
            return state;
    }
}