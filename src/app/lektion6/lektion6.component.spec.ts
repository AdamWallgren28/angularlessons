import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lektion6Component } from './lektion6.component';

describe('Lektion6Component', () => {
  let component: Lektion6Component;
  let fixture: ComponentFixture<Lektion6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lektion6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lektion6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
