import { Component, Input, OnInit } from '@angular/core';
import { EventCount } from '../../../common/interface';

@Component({
  selector: 'app-event-count',
  templateUrl: './event-count.component.html',
  styleUrls: ['./event-count.component.scss']
})
export class EventCountComponent implements OnInit {
 @Input() eventCount: EventCount;
  constructor() { }

  ngOnInit(): void {
  }

}
