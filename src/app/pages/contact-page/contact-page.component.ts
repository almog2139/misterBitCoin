import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {


  constructor(private contactService: ContactService) {
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }
  contacts: Contact[] = []
  subscription: Subscription
 

  ngOnInit(): void {
  
    this.contactService.loadContacts()
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  onFilter(filterBy) {
     this.contactService.loadContacts(filterBy)
  }


}
