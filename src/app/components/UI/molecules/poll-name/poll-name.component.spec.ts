import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollNameComponent } from './poll-name.component';

describe('PollNameComponent', () => {
  let component: PollNameComponent;
  let fixture: ComponentFixture<PollNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
