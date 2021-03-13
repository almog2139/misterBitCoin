import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
@Input() contacts:Contact[]=[]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toggleOpenEdit() {
    this.router.navigateByUrl(this.router.url === '/edit' ? '' : '/edit')
  }

}
