import { Component } from '@angular/core';

// Uppgift 1
function charCount(str: string, char: string): number {

  if (str.length === 0) {
      return 0;
  }
  
  if (str[0] === char) {
      return 1 + charCount(str.slice(1), char);
  } else {
      return charCount(str.slice(1), char);
  }
}
let str: string = "adam wallgren";
let char: string = "a";


















// Uppgift 2
function reverseListRecursive(list: any[]): any[] {
  if (list.length <= 1) {
      return list;
  }
  return [...reverseListRecursive(list.slice(1)), list[0]] //lägger första sist

  // eller sista först (concat funkar ej med T[] ???)
  //return [list[list.length - 1]].concat(reverseListRecursive(list.slice(0, list.length - 1)));
}
let originalList: any[] = [1, 2, 3, 4, 5];
let reversedList: any[] = reverseListRecursive(originalList);

// Uppgift 3


// ERXPORTERING
@Component({
  selector: 'app-lektion5',
  standalone: true,
  imports: [],
  templateUrl: './lektion5.component.html',
  styleUrl: './lektion5.component.css'
})
export class Lektion5Component {
  public svarFiveOne : string =`Svar 1: Antal förekomster av "${char}" i "${str}" är: ${charCount(str, char)}.`;
  public svarFiveTwo : string = `Svar 2: [${originalList}] bakofram, blir:  [${reversedList}].`;
  public svarFiveThree : string = `Svar 3: `;

}
