import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: Contact
  msg = ''
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.contact = data.contact || this.contactService.getEmptyContact()
    })
  }

  onSubmitForm() {
    const { name, email, phone } = this.contact
    if (!name || !email || !phone) {
      this.msg = 'all field are require!'
      return
    }
    this.contactService.saveContact({ ...this.contact })
    this.msg = 'Saved Succesfuly!'
    setTimeout(() => {
      this.router.navigate(['contact'])
      this.msg = ''

    }, 1500)
    // this.contact = this.contactService.getEmptyContact()
    // this.petService.setFilter()
  }
  onRemoveContact(ev: MouseEvent | TouchEvent) {
    // ev.stopPropagation()
    this.contactService.deleteContact(this.contact._id)
    this.msg = 'Remove Succesfuly!'
    setTimeout(() => {
      this.router.navigate(['contact'])
      this.msg = ''

    }, 1500)
  }


}
