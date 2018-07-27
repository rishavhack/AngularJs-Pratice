import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCtrlComponent } from './home-ctrl.component';

describe('HomeCtrlComponent', () => {
  let component: HomeCtrlComponent;
  let fixture: ComponentFixture<HomeCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
