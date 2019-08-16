import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayStockComponent } from './today-stock.component';

describe('TodayStockComponent', () => {
  let component: TodayStockComponent;
  let fixture: ComponentFixture<TodayStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
