import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCreateFormComponent } from './poll-create-form.component';

describe('PollCreateFormComponent', () => {
  let component: PollCreateFormComponent;
  let fixture: ComponentFixture<PollCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
