/**
 * * Title: enhanced-composer-app-modules.ts
 * Author: Larry Ohaka
 * Date: 6/12/21
 * Description: Composers
 */

 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { ContactComponent } from './contact/contact.component';
 import { AboutComponent } from './about/about.component';
 import { ComposerListComponent } from './composer-list/composer-list.component';
 import { ComposerDetailsComponent } from './composer-details/composer-details.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 @NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ComposerListComponent,
    ComposerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
