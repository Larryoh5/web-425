import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;


constructor(fullName: string, genre: string){
  this.fullName = fullName;
  this.genre = genre;
}
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Florence Price", "Classical"),
      new Composer("William grant Still", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("George Walker", "Classical"),
      new Composer("Margaret Bonds", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
