import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
@Input () title:string
@Input () movesList:Array<object>
  constructor() { }

  ngOnInit(): void {
  }

}
