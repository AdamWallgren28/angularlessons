import { Component } from '@angular/core';

// Uppgift 6.1
export function addNumbers(a: number, b: number): number {
  let sum = a+b;
  return sum;
}

// Uppgift 6.2
export function greetName(nameStr: string): string {
  return `Hello ${nameStr}`;
}

// Uppgift 6.3
export async function delayedMessage(): Promise<string> {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve("Hello after delay");
      }, 500);
  });
}



@Component({
  selector: 'app-lektion6',
  standalone: true,
  imports: [],
  templateUrl: './lektion6.component.html',
  styleUrl: './lektion6.component.css'
})


export class Lektion6Component {
  public svarSixOne : string = `Svar 6.1:  Funktion att testa: 1 + 2 = ${addNumbers(1, 2)}`;
  public testSixOne : string = `För teste, kör ng test i terminalen (xcfe4).`;
}
