import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: { id: number, name: string }[];

  constructor(private bookService: BookService) { }

  loadBooks() {
    this.bookService.getList()
    .subscribe(response => this.books = response.json());
  }

  ngOnInit() {
    this.loadBooks();
  }

  delete(book) {
    this.bookService.delete(book)
    .subscribe(response => this.loadBooks());
  }
}
