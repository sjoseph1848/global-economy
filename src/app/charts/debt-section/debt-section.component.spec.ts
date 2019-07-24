import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtSectionComponent } from './debt-section.component';

describe('DebtSectionComponent', () => {
  let component: DebtSectionComponent;
  let fixture: ComponentFixture<DebtSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
