import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollGraphComponent } from './poll-graph.component';

describe('PollGraphComponent', () => {
  let component: PollGraphComponent;
  let fixture: ComponentFixture<PollGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
