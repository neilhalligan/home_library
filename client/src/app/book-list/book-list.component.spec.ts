/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BookService } from '../book.service';
import { BookListComponent } from './book-list.component';
import { BookFormComponent } from '../book-form/book-form.component';
import { MockBookService } from '../../testing/mock-book.service';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
        BookFormComponent
      ]
    })
    .overrideComponent(BookListComponent, {
      set: {
        providers: [
          { provide: BookService, useClass: MockBookService }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
