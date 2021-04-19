import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-timer-enter',
  templateUrl: './timer-enter.component.html',
  styleUrls: ['./timer-enter.component.scss']
})
export class TimerEnterComponent implements OnInit {
  getTime: number;
  constructor(private dataSerice: DataService) { }

  ngOnInit(): void {
    this.dataSerice.timeCount.subscribe((count: number) => {
      this.getTime = count;
    });
  }

}
