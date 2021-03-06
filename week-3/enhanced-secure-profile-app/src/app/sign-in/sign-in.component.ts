/*
============================================
; Title:  sign-in.component.ts
; Author: Larry Ohaka
; Date: June 8, 2021
; Description: Sign in
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}
