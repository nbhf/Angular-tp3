import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1ColorChangerComponent } from './ex1-color-changer.component';

describe('Ex1ColorChangerComponent', () => {
  let component: Ex1ColorChangerComponent;
  let fixture: ComponentFixture<Ex1ColorChangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex1ColorChangerComponent]
    });
    fixture = TestBed.createComponent(Ex1ColorChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
