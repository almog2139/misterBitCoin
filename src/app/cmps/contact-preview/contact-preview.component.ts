import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPreviewComponent implements OnInit {
@Input () contact:Contact

isLoad: boolean = false
  constructor() { }

  ngOnInit(): void {

  }

  load() {
    this.isLoad = true
  }
  
 

}
