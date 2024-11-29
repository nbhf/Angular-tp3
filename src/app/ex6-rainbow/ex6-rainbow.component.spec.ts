import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6RainbowComponent } from './ex6-rainbow.component';

describe('Ex6RainbowComponent', () => {
  let component: Ex6RainbowComponent;
  let fixture: ComponentFixture<Ex6RainbowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex6RainbowComponent]
    });
    fixture = TestBed.createComponent(Ex6RainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
