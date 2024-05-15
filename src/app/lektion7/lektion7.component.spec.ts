import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lektion7Component } from './lektion7.component';

describe('Lektion7Component', () => {
  let component: Lektion7Component;
  let fixture: ComponentFixture<Lektion7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lektion7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lektion7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ShoppingList } from './lektion7.component';

describe('ShoppingList - Lägg till vara', () => {
  it('lägger till en vara i listan', () => {
    let shoppingList = new ShoppingList(('Mjölk', 1, 10));
    shoppingList.addItem('Mjölk');
    expect(shoppingList.hasItem('Mjölk')).toBe(true);
  });
});