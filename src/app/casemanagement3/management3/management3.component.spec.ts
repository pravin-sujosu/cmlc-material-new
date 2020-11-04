import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Management3Component } from './management3.component';

describe('ManagementComponent', () => {
  let component: Management3Component;
  let fixture: ComponentFixture<Management3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Management3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Management3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
