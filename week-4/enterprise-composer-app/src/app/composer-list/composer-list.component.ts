/**
 * * Title: enhanced-composer-interface.ts
 * Author: Larry Ohaka
 * Date: 6/20/21
 * Description: Composers
 */

 import { Component, OnInit } from '@angular/core';
 import { IComposer } from '../composer.interface';
 import { ComposerService } from '../composer.service';
 import { FormControl } from '@angular/forms';
 import { debounceTime } from 'rxjs/operators';

 @Component({
   selector: 'app-composer-list',
   templateUrl: './composer-list.component.html',
   styleUrls: ['./composer-list.component.css']
 })
 export class ComposerListComponent implements OnInit {

   composers: Array<IComposer>;
   txtSearchControl = new FormControl('');

   constructor(private composerService: ComposerService) {
     /**Dependency injections to create a new instance of the composer service */
     this.composers = this.composerService.getComposers();
     //Method that handles the value change
     this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
    }

    ngOnInit(): void {
    }

    filterComposers(name: string) {
      alert(name);
    }
  }
