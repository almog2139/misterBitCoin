import { Move } from "./move";

export interface User {
_id?:string, 
 name: string,
 pass:string,
 coins: number,
 moves: Array<Move>

}
