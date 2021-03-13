import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Observable<Contact>> {

  
  constructor(private contactService: ContactService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
    const { id } = route.params
    console.log('id',id);
    
    return this.contactService.getContactById(id)
  }
 
}
