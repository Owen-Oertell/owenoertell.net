import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingOnComponent } from './working-on.component';

describe('WorkingOnComponent', () => {
  let component: WorkingOnComponent;
  let fixture: ComponentFixture<WorkingOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
