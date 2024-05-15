import { Component } from '@angular/core';

// Nedan funkar ej...
//
// export class ShoppingList {
//   item: string;
//   antal: number;
//   prisA: number;

//   constructor(item: string, antal: number, prisA: number) {
//     this.item = item;
//     this.antal = antal;
//     this.prisA = prisA;
//   }

//   function addItem(item: string, antal: number, prisA: number) { 
//   }
// }
//



@Component({
  selector: 'app-lektion7',
  standalone: true,
  imports: [],
  templateUrl: './lektion7.component.html',
  styleUrl: './lektion7.component.css'
})

export class Lektion7Component {
    public svarSevenOne : string = `Svar 7.1... (to be continude).`
}

