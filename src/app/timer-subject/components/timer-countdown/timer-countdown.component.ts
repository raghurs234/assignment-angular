import { Component, OnInit, ViewChild, ElementRef,} from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { TimerList } from '../../../common/interface';
import { DataService } from '../../data.service';



@Component({
  selector: 'app-timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.scss']
})
export class TimerCountdownComponent implements OnInit {
  buttonText = 'Start';
  timerLimit: number;
  timerstate: TimerList = {
    events: []
  };
  eventCount = {
    start : 0,
    pause : 0
  };
  @ViewChild('time') timerRef: ElementRef;
  private subscription: Subscription;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  timerAction(): void {
    this.timerLimit = this.timerRef.nativeElement.value;
    console.log(this.timerLimit);
    if (this.timerLimit || this.buttonText === 'Pause' ) {
     this.buttonText = this.buttonText === 'Start' ? 'Pause' : 'Start';

     if (this.buttonText === 'Pause') {
          this.pushEvent('start');
          const numbers = timer(0, 1000);
          this.subscription = numbers.subscribe((x) => {
            this.timerLimit--;
            this.dataService.updateCount(this.timerLimit);
            this.timerRef.nativeElement.value = this.timerLimit;
            if (this.timerLimit === 0) {
              this.subscription.unsubscribe();
              this.buttonText = 'Start';
              this.timerRef.nativeElement.value = '';
            }
          });
     }
     if (this.buttonText === 'Start') {
      this.subscription.unsubscribe();
      this.pushEvent('pause');
   }

   }
  }

  reset(): void {
    this.subscription.unsubscribe();
    this.timerRef.nativeElement.value = '';
    this.buttonText = 'Start';
    this.timerLimit = 0;
    this.timerstate.events = [];
    this.eventCount = {
      start: 0,
      pause: 0
    };
    this.dataService.updateEventActionCount(this.eventCount);
    this.dataService.updateCount(this.timerLimit);
  }

  pushEvent(eventType: string): void {
    this.timerstate.events.push({
      type: eventType,
      timer: this.timerLimit,
      currentTime: new Date()
    });
    this.dataService.updateEvents(this.timerstate);
    eventType === 'start' ? this.eventCount.start++ : this.eventCount.pause++;
    this.dataService.updateEventActionCount(this.eventCount);
  }

}
