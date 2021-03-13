import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { User } from 'src/app/model/user';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact
  movesList:Array<object>
  title="Your Moves:"
  user:User
  msg=''
  faEnvelope=faEnvelope
  faPhone=faPhoneAlt

  
  constructor(private userService: UserService, private route: ActivatedRoute,public router: Router) { }
// @Output () onTransferFunds=new EventEmitter<>() 
  ngOnInit(): void {
    this.contact = this.route.snapshot.data.contact
    this.onGetLoggdinUserMove()
    // this.store.subscribe(state => this.user = state.user);
  }
  async onGetLoggdinUserMove(): Promise<void> {
    const user= await this.userService.getUser()
    this.user=user
    this.getContactMoves()
    // this.movesList=user.moves.filter(move=>move.toId===this.contact._id)
  
  }
  // editContact(ev: MouseEvent | TouchEvent) {
  //   ev.stopPropagation()
  //   this.router.navigate(['edit', this.contact._id])
  // }
  getContactMoves() {
    if (!this.contact) return;
    
    this.movesList = this.userService.getContactMoves(this.contact._id);
  }
  
 

}
