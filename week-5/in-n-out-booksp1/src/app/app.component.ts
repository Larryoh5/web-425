import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //assignment variable thats a string variable
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.3 - Navigation and Layout';
  }

}
