/**
 * * Title: enhanced-composer-interface.ts
 * Author: Larry Ohaka
 * Date: 6/12/21
 * Description: Composers
 */

 import { Component, OnInit } from '@angular/core';
 import { IComposer } from '../composer.interface';
 import { ComposerService } from '../composer.service';


 @Component({
   selector: 'app-composer-list',
   templateUrl: './composer-list.component.html',
   styleUrls: ['./composer-list.component.css']
 })
 export class ComposerListComponent implements OnInit {

   composers: Array<IComposer>;

   constructor(private composerService: ComposerService) {
     /**Dependency injections to create a new instance of the composer service */
     this.composers = this.composerService.getComposers();
   }

   ngOnInit(): void {
   }

  }
