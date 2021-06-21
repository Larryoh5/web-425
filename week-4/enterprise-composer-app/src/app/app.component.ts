/**
 * * Title: app.component.ts
 * Author: Larry Ohaka
 * Date: 6/12/21
 * Description: Composers
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.4 - Async Pipe';
}
