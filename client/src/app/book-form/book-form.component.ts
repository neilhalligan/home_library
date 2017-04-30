import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

export class BookFormComponent implements OnInit {

  model = new Book('');

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submitted");
    this.bookService
      .save(this.model)
      .subscribe(response => console.log(response));
  }
}
