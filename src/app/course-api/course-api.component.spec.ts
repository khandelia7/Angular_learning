import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseApiComponent } from './course-api.component';

describe('CourseApiComponent', () => {
  let component: CourseApiComponent;
  let fixture: ComponentFixture<CourseApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
