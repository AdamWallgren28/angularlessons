import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lektion3Component } from './lektion3.component';

describe('Lektion3Component', () => {
  let component: Lektion3Component;
  let fixture: ComponentFixture<Lektion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lektion3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lektion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
