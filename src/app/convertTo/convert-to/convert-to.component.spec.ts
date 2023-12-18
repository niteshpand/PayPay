import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToComponent } from './convert-to.component';

describe('ConvertToComponent', () => {
  let component: ConvertToComponent;
  let fixture: ComponentFixture<ConvertToComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertToComponent]
    });
    fixture = TestBed.createComponent(ConvertToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
