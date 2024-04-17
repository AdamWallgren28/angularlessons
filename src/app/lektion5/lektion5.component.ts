import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
function reverseListRecursive<T>(list: T[]): T[] {
  if (list.length <= 1) {
      return list;
  }
  return [...reverseListRecursive(list.slice(1)), list[0]] //lägger första sist

  // eller sista först:
  // return [list[list.length - 1]].concat(reverseListRecursive(list.slice(0, list.length - 1)));
}
let originalList: any[] = [1, 2, 3, 4, 5];
let reversedList: any[] = reverseListRecursive(originalList);

// ERXPORTERING
@Component({
  selector: 'app-lektion5',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe, CommonModule],
  templateUrl: './lektion5.component.html',
  styleUrl: './lektion5.component.css'
})

export class Lektion5Component implements OnInit {
  public svarFiveOne : string =`Svar 1: Antal förekomster av "${char}" i "${str}" är: ${charCount(str, char)}.`;
  public svarFiveTwo : string = `Svar 2: [${originalList}] bakofram, blir:  [${reversedList}].`;
  public svarFiveThree : string = `Svar 3: `;



  // Uppgit 3
  constructor (private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getData();
  }

  // Lagra i RAM
  // public getData () : Observable <any> {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }

  // Lagra i console syncront
  // public getData () {
  //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((value) => {
  //     console.log(value);
  //   });
  // }

  // Lagra i console, asyncront
  public async getData() {
    let value = await this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
    console.log(value);
  }

}