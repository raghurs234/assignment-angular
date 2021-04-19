import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerEnterComponent } from './timer-enter.component';

describe('TimerEnterComponent', () => {
  let component: TimerEnterComponent;
  let fixture: ComponentFixture<TimerEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerEnterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
