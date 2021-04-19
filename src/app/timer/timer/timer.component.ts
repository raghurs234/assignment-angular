import { Component, OnInit } from '@angular/core';
import { TimerList, EventCount } from '../../common/interface';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  currentTimeValue: boolean;
  events: TimerList;
  eventCount: EventCount;
  constructor() { }

  ngOnInit(): void {
  }

  getTime(event): void {
    this.currentTimeValue = event;
  }

  getEvents(event): void {
    this.events = event;
    console.log(this.events);
  }

  getTimerActionCount(event): void{
    this.eventCount = event;
    console.log(this.eventCount);
  }

}
