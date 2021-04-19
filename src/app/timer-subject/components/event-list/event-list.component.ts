import { Component, OnInit } from '@angular/core';
import { TimerList } from '../../../common/interface';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  getEventList: TimerList;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.eventList.subscribe((actionList: TimerList) => {
      this.getEventList = actionList;
    });
  }
}
