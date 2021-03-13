import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { BehaviorSubject, of } from 'rxjs';
import { User } from '../model/user';
import { ContactService } from './contact.service';
import { StorageService } from './storage.service';
import { UtilService } from './util.service';

let users = [
  {
    _id: 'u101',
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
  }

]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private utilService: UtilService, private storageService: StorageService, private contactService: ContactService) { }
  KEY = 'user_db';
  USER_KEY='loggedInUser'

  getUser() {

    const user = this.storageService.loadFromStorage(this.USER_KEY)
    var copyUsers = this.storageService.loadFromStorage(this.KEY)
    const currUser = copyUsers.find(currUser => currUser.name === user.name && currUser.pass===user.pass)
    // return Promise.resolve({ ...user })
    return Promise.resolve({ ...currUser })
  }

  signIn({userName,pass}) {
    console.log('sign in ', userName);

   
    var copyUsers = this.storageService.loadFromStorage(this.KEY)
    const currUser = copyUsers.find(currUser => currUser.name === userName&&currUser.pass===pass )
   if(currUser){
    this.storageService.saveToStorage(this.USER_KEY, currUser)
    return true
  }
  else return false

  }

  signUp({userName,pass}) {
  
    
    var users = this.storageService.loadFromStorage(this.KEY)
    if (users) {
      console.log('if');
      
      const isContactExists = users.some(currUser => currUser.name === userName &&currUser.pass===pass)
      console.log(isContactExists);

      if (!isContactExists) {
        console.log('iff');
        
        // var copyUsers = this.storageService.loadFromStorage(this.KEY)
        const user = {
          _id: this.utilService.makeId(),
          name: userName,
          pass,
          coins: 100,
          moves: []
        }
        users = [...users, user]
        this.storageService.saveToStorage(this.KEY, users)
        this.storageService.saveToStorage(this.USER_KEY, user)
        return true
      }
      else return false
    }
    else{
      console.log('else');
      
      const user = {
        _id: this.utilService.makeId(),
        name: userName,
        pass,
        coins: 100,
        moves: []
      }
      // users = [...users, user]
      this.storageService.saveToStorage(this.KEY, [user])
      this.storageService.saveToStorage(this.USER_KEY, user)
      return true
    }
  }
  addMove(contact, amount) {
    const user = this.storageService.loadFromStorage(this.USER_KEY)
    var users = this.storageService.loadFromStorage(this.KEY)

    if (user.coins >= amount) {
      const move = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount: amount
      }
      const coinsLeft = user.coins - amount
      user.coins=coinsLeft
      console.log(user.coins);
      
      user.moves = [move, ...user.moves]
      this.storageService.saveToStorage(this.USER_KEY, user)
      users.forEach(currUser => {

        if (currUser.name === user.name){
          currUser.moves = [move, ...user.moves]
          currUser.coins=coinsLeft
        } 
      })
      this.storageService.saveToStorage(this.KEY, users)
      return { coins: user.coins }
    }
    else return { coins: user.coins }




  }
  public getContactMoves(contactId) {
    const loggedUser = this.storageService.loadFromStorage(this.USER_KEY);
    if (!loggedUser) return;
    const contactMoves = loggedUser.moves.filter(
      (move) => move.toId === contactId
    );
    return contactMoves;
  }
}
