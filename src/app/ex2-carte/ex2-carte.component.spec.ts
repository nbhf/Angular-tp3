import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2CarteComponent } from './ex2-carte.component';

describe('Ex2CarteComponent', () => {
  let component: Ex2CarteComponent;
  let fixture: ComponentFixture<Ex2CarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex2CarteComponent]
    });
    fixture = TestBed.createComponent(Ex2CarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
