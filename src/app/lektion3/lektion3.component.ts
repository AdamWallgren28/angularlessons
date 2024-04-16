import { Component } from '@angular/core';

// Uppgift 1.1.1
interface User {
  id: number;
  name: string;
  email: string;
}

// Uppgift 1.1.2
interface AuthenticatedUser extends User {
  authToken: string;
}

// Uppgift 1.2.1
type Fordon = {
  brand: string;
  model: string;
  prodYear: number;
};

// Uppgift 1.2.2
type regNr = string | number;

// Uppgift 2.1
function wrappInArray<T>(arg: T): T[] {
  return [arg];
}

// Uppgift 2.2
const testDataA = wrappInArray(42);
const testDataB = wrappInArray('Liftaren');
const testDataC = wrappInArray([3, 4]);
console.log(testDataA);
console.log(testDataB, testDataC);

// Uppgift 3.1.1
interface Produkt {
  id : number;
  name : string;
  price: number;
  category: string;
}

//...
//...
//...


@Component({
  selector: 'app-lektion3',
  standalone: true,
  imports: [],
  templateUrl: './lektion3.component.html',
  styleUrl: './lektion3.component.css'
})


export class Lektion3Component {

  public svarTre : string = 'Se console för svar.';


}
