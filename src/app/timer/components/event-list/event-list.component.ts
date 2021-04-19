import { Component, Input, OnInit } from '@angular/core';
import { TimerList } from '../../../common/interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() getEventList: TimerList;
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.getEventList);
  }
}
