import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourseFormComponent } from './outsourse-form.component';

describe('OutsourseFormComponent', () => {
  let component: OutsourseFormComponent;
  let fixture: ComponentFixture<OutsourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsourseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
