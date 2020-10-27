import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Management1Component } from './management1.component';

describe('ManagementComponent', () => {
  let component: Management1Component;
  let fixture: ComponentFixture<Management1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Management1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Management1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
