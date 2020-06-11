import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollhelpComponent } from './scrollhelp.component';

describe('ScrollhelpComponent', () => {
  let component: ScrollhelpComponent;
  let fixture: ComponentFixture<ScrollhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
