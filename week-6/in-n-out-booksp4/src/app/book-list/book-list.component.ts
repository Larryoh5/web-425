/**
 * * Title: book-list.component.ts
 * Author: Larry Ohaka
 * Date: 6/25/21
 * Description: Navigation and Layout
 */

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],

})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  //Headers for the table
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  //Variable that maps to a book object
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}
//Return book based on ISBN
showBookDetails(isbn: string) {
  this.book = this.booksService.getBook(isbn);
  const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
    data: { book: this.book },
    disableClose: true,
    width: '800px'
  })
  console.log(this.book);
  //Call function
  dialogRef.afterClosed().subscribe(result => {
    if (result === 'confirm') {
      //@ts-ignore
      this.book = null;
    }
  })
}
}
