import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lektion4Component } from './lektion4.component';

describe('Lektion4Component', () => {
  let component: Lektion4Component;
  let fixture: ComponentFixture<Lektion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lektion4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lektion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
