import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Management4Component } from './management4.component';

describe('ManagementComponent', () => {
  let component: Management4Component;
  let fixture: ComponentFixture<Management4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Management4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Management4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
