import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecterProviderComponent } from './injecter-provider.component';

describe('InjecterProviderComponent', () => {
  let component: InjecterProviderComponent;
  let fixture: ComponentFixture<InjecterProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjecterProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjecterProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
