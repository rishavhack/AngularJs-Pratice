import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCtrlComponent } from './todo-ctrl.component';

describe('TodoCtrlComponent', () => {
  let component: TodoCtrlComponent;
  let fixture: ComponentFixture<TodoCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
