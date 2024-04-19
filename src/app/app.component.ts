import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { Lektion4Component } from './lektion4/lektion4.component';
import { Lektion3Component } from './lektion3/lektion3.component';
import { Lektion5Component } from './lektion5/lektion5.component';
import { Lektion6Component } from './lektion6/lektion6.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, RouterOutlet, Lektion3Component, Lektion4Component, Lektion5Component, Lektion6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularlessons';
}
