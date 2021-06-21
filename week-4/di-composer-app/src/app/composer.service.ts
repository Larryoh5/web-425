/**
 * * Title: app.component.ts
 * Author: Larry Ohaka
 * Date: 6/12/21
 * Description: Composers
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

// Five composer objects
constructor(){
  this.composers = [
    {composerId: 100, fullName: "Florence Price", genre: "Classical"},
    {composerId: 101, fullName: "William grant Still", genre: "Classical"},
    {composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
    {composerId: 103, fullName: "George Walker", genre: "Classical"},
    {composerId: 104, fullName: "Margaret Bonds", genre: "Classical"},

    ];
  }
// Gets composers
getComposers() {
  return this.composers;
}

getComposer(composerId: number) {
  for (let composer of this.composers) {
    if (composer.composerId === composerId) {
      return composer;
    }
   }
   return {} as IComposer;}
 }
