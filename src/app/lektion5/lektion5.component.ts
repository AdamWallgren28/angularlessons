import { Component } from '@angular/core';

function countChar(str: string, char: string): number {

  if (str.length === 0) {
      return 0;
  }
  
  if (str.charAt(0) === char) {
      return 1 + countChar(str.slice(1), char);
  } else {
      return countChar(str.slice(1), char);
  }
}

// Exempelanvändning
const str: string = "adam wallgren";
const char: string = "a";


@Component({
  selector: 'app-lektion5',
  standalone: true,
  imports: [],
  templateUrl: './lektion5.component.html',
  styleUrl: './lektion5.component.css'
})
export class Lektion5Component {
  public svar : string =`Antal förekomster av "${char}" i "${str}" är: ${countChar(str, char)}`;

}
