import { Component } from '@angular/core';

// Uppgift 6.1
function addNumbers(a: number, b: number): number {
  let sum = a+b;
  return sum;
}
console.log(addNumbers(1, 2))


test('adds 1 + 2 to equal 3', () => {
  expect(addNumbers(1, 2)).toBe(3);
});

@Component({
  selector: 'app-lektion6',
  standalone: true,
  imports: [],
  templateUrl: './lektion6.component.html',
  styleUrl: './lektion6.component.css'
})


export class Lektion6Component {
  public svarSixOne : string = `Svar 6.1:  Funktion att testa: 1 + 2 = ${addNumbers(1, 2)}`;
  public testSixOne : string = ``;
}
