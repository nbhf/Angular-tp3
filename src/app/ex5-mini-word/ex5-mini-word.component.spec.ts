import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5MiniWordComponent } from './ex5-mini-word.component';

describe('Ex5MiniWordComponent', () => {
  let component: Ex5MiniWordComponent;
  let fixture: ComponentFixture<Ex5MiniWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex5MiniWordComponent]
    });
    fixture = TestBed.createComponent(Ex5MiniWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
