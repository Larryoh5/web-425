/**
 * * Title: composer-list.component.spec.ts
 * Author: Larry Ohaka
 * Date: 6/12/21
 * Description: Composers
 */



 import { ComponentFixture, TestBed } from '@angular/core/testing';

 import { ComposerListComponent } from './composer-list.component';

 describe('ComposerListComponent', () => {
   let component: ComposerListComponent;
   let fixture: ComponentFixture<ComposerListComponent>;

   beforeEach(async () => {
     await TestBed.configureTestingModule({
       declarations: [ ComposerListComponent ]
     })
     .compileComponents();
   });

   beforeEach(() => {
     fixture = TestBed.createComponent(ComposerListComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });
