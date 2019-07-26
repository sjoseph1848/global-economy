import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSectComponent } from './test-sect.component';

describe('TestSectComponent', () => {
  let component: TestSectComponent;
  let fixture: ComponentFixture<TestSectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
