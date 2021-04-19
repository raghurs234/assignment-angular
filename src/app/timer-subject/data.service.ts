import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TimerList, EventCount } from '../common/interface';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private getTime = new Subject();
  private getEvents = new Subject();
  private getEventActionCount = new Subject();

  timeCount  = this.getTime.asObservable();
  eventList  = this.getEvents.asObservable();
  eventActionCount = this.getEventActionCount.asObservable();

  updateCount(count: number): void {
    this.getTime.next(count);
  }

  updateEvents(eventList: TimerList): void {
    this.getEvents.next(eventList);
  }

  updateEventActionCount(eventCount: EventCount): void {
    this.getEventActionCount.next(eventCount);
  }

  constructor() { }
}
