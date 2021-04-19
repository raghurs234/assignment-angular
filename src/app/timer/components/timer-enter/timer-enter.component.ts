import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-enter',
  templateUrl: './timer-enter.component.html',
  styleUrls: ['./timer-enter.component.scss']
})
export class TimerEnterComponent implements OnInit {
  @Input() getTime: number;

  constructor() { }

  ngOnInit(): void {
  }

}
