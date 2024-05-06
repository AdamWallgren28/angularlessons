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

import { addNumbers } from './lektion6.component';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
      expect(addNumbers(1, 2)).toBe(3);
      
  });

  it('should handle both positive and negative numbers', () => {
    expect(addNumbers(1, (-2))).toBe(-1);
    
  });

  // it('should return NaN if any input is not a number', () => {
  //   expect(addNumbers('a', 2)).toBeNaN();
  // });

});


import { greetName } from './lektion6.component';

describe('greet a name(strng)', () => {
 
  it('should return Hello + input string', () => {
    expect(greetName('Adam')).toBe('Hello Adam');
  });

});

import { delayedMessage } from './lektion6.component';

describe('Deleymassage asyc func.', () => {
  it('should async return a string with a delay', async () => {
    let nameToGreet = await delayedMessage();
    expect (nameToGreet).toBe('Hello after delay');
  });
});