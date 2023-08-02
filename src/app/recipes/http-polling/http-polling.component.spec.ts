import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPollingComponent } from './http-polling.component';

describe('HttpPollingComponent', () => {
  let component: HttpPollingComponent;
  let fixture: ComponentFixture<HttpPollingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpPollingComponent]
    });
    fixture = TestBed.createComponent(HttpPollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
