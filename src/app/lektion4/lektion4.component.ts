import { Component } from '@angular/core';

// Uppgift 1
function sortArray(arr: number[]): number[] {
  let newArray: number[] = [];
  while (arr.length > 0) {
    let minIndex = arr.indexOf(Math.min(...arr));
    newArray.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }
  return newArray;
}

let numbers = [4, 2, 7, 1, 9, -3]; // Testvektor
let sortedArray = sortArray(numbers);
console.log(sortedArray);

// Uppgift 2

// insertionSort
function sortArrByInsert (arr: number[]): number[]  {
  for ( let i = 1  ; i < arr.length ; i++) {
    let key = arr[i];
    let ii = i - 1;

    while (ii >= 0 && arr[ii] > key) {
      arr[ii + 1] = arr[ii];
      ii = ii - 1;
    }
    arr[ii + 1] = key;
  }
return arr;
}
console.log(sortArrByInsert([2, 1, 5, 4])); // Testvektor

// selectionSort
// Se första - typ

function sortArrBySelection (arr: number[]): number[]  {
  for ( let i = 0  ; i < arr.length ; i++) {
    let minKey = i;

    for (let ii = i + 1; ii < arr.length; ii++) {
      if (arr[ii] < arr[minKey]) {
          minKey = ii;
      }
    }

    if (minKey !== i) {
      [arr[i], arr[minKey]] = [arr[minKey], arr[i]];
    }

  }
  return arr
}
console.log(sortArrBySelection([2, 1, 3, 5, 1])); // Testvektor

// Uppgift 3
// linearSearch


// binarySearch


@Component({
  selector: 'app-lektion4',
  standalone: true,
  imports: [],
  templateUrl: './lektion4.component.html',
  styleUrl: './lektion4.component.css'
})
export class Lektion4Component {

}
