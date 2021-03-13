import {ActionReducerMap,MetaReducer} from '@ngrx/store'
import * as user from './user.reducer'
import {environment} from '../../../environments/environment'


export interface State {
    user:user.State;
}
export const reducers:ActionReducerMap<State>={
    user:user.reducer
};
export const metaReducers:MetaReducer<State>[]=!environment.production
? []
: [] ;