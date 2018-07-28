import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RishavComponent } from './rishav.component';

describe('RishavComponent', () => {
  let component: RishavComponent;
  let fixture: ComponentFixture<RishavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RishavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RishavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
