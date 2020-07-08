import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmyComponent } from './cartmy.component';

describe('CartmyComponent', () => {
  let component: CartmyComponent;
  let fixture: ComponentFixture<CartmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
