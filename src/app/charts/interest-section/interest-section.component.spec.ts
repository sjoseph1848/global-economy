import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestSectionComponent } from './interest-section.component';

describe('InterestSectionComponent', () => {
  let component: InterestSectionComponent;
  let fixture: ComponentFixture<InterestSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
