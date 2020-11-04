import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Postdatafrm } from './postdatafrm.component';

describe('Postdatafrm', () => {
  let component: Postdatafrm;
  let fixture: ComponentFixture<Postdatafrm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Postdatafrm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Postdatafrm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
