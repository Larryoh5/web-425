/**
 * * Title: enhanced-composer-interface.ts
 * Author: Larry Ohaka
 * Date: 6/12/21
 * Description: Composers
 */


 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
 import { IComposer } from '../composer.interface';
 import { Composer } from '../composer.class';

 @Component({
   selector: 'app-composer-details',
   templateUrl: './composer-details.component.html',
   styleUrls: ['./composer-details.component.css'],
 })
 export class ComposerDetailsComponent implements OnInit {
   composerId: number;
   composer: IComposer;

   constructor(private route: ActivatedRoute) {
     this.composerId = parseInt(
       this.route.snapshot.paramMap.get('composerId'),
       10
     );

     if (this.composerId) {
       this.composer = new Composer().getComposer(this.composerId);
     }
   }

   ngOnInit(): void {}
 }
