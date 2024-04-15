import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lektion5Component } from './lektion5.component';

describe('Lektion5Component', () => {
  let component: Lektion5Component;
  let fixture: ComponentFixture<Lektion5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lektion5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lektion5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
