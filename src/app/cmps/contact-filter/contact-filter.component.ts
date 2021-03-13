import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  constructor(private contactService: ContactService) {
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }
  contacts: Contact[] = []
  @Output() onFilter=new EventEmitter<any>()
 

filterBy={term:''}
subscription: Subscription


ngOnInit(): void {
}
ngOnDestroy() {
  this.subscription.unsubscribe()
}


}
