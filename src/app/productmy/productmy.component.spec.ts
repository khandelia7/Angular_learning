import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmyComponent } from './productmy.component';

describe('ProductmyComponent', () => {
  let component: ProductmyComponent;
  let fixture: ComponentFixture<ProductmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
