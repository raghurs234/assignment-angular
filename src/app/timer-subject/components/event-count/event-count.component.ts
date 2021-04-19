import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { EventCount } from '../../../common/interface';

@Component({
  selector: 'app-event-count',
  templateUrl: './event-count.component.html',
  styleUrls: ['./event-count.component.scss']
})
export class EventCountComponent implements OnInit {
  eventCount: EventCount;
  constructor(private dataSerice: DataService) { }

  ngOnInit(): void {
    this.dataSerice.eventActionCount.subscribe((eventCount: EventCount) => {
      this.eventCount = eventCount;
    });
  }

}
