import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormsComponent } from './person-forms.component';

describe('PersonFormsComponent', () => {
  let component: PersonFormsComponent;
  let fixture: ComponentFixture<PersonFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
