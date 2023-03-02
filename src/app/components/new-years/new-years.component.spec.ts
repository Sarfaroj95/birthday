import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearsComponent } from './new-years.component';

describe('NewYearsComponent', () => {
  let component: NewYearsComponent;
  let fixture: ComponentFixture<NewYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewYearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
