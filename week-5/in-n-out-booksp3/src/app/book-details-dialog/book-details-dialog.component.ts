/**
 * * Title: book-details-dialog.component.ts
 * Author: Larry Ohaka
 * Date: 6/25/21
 * Description: Dialogs
 */

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface.ts';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
     book: IBook;

     constructor(
      private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
      //@ts-ignore
      @Inject(MAT_DIALOG_DATA) data)
    {
      this.book = data.book;
}

  ngOnInit(): void {
  }

}
