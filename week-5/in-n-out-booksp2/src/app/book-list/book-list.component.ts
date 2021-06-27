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

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  //Headers for the table
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  //Variable that maps to a book object
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}
//Used to return book based on ISBN passed in
showBookDetails(isbn: string) {
  this.book = this.booksService.getBook(isbn);
  console.log(this.book);
}
}
