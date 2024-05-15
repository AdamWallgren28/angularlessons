import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})


export class MyformComponent {
public userName : string = '';
public passWord : string = '';
}
