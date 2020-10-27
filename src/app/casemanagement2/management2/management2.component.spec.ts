import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Management2Component } from './management2.component';

describe('ManagementComponent', () => {
  let component: Management2Component;
  let fixture: ComponentFixture<Management2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Management2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Management2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
