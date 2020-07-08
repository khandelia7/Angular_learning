import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoApiComponent } from './course-info-api.component';

describe('CourseInfoApiComponent', () => {
  let component: CourseInfoApiComponent;
  let fixture: ComponentFixture<CourseInfoApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInfoApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInfoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
