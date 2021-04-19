import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TimerComponent } from './timer/timer.component';
import { TimerCountdownComponent } from './components/timer-countdown/timer-countdown.component';
import { TimerEnterComponent } from './components/timer-enter/timer-enter.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCountComponent } from './components/event-count/event-count.component';


@NgModule({
  declarations: [TimerComponent, TimerCountdownComponent, TimerEnterComponent, EventListComponent, EventCountComponent],
  imports: [
    CommonModule,
    TimerRoutingModule,
    ReactiveFormsModule
  ]
})
export class TimerModule { }
