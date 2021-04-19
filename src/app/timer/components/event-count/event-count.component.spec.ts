import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCountComponent } from './event-count.component';

describe('EventCountComponent', () => {
  let component: EventCountComponent;
  let fixture: ComponentFixture<EventCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
