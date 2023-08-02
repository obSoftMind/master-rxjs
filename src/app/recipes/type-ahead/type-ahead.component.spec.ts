import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAheadComponent } from './type-ahead.component';

describe('TypeAheadComponent', () => {
  let component: TypeAheadComponent;
  let fixture: ComponentFixture<TypeAheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeAheadComponent]
    });
    fixture = TestBed.createComponent(TypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
