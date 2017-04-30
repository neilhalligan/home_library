/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BookService } from '../book.service';
import { BookListComponent } from './book-list.component';
import { MockBookFormComponent } from '../../testing/mock-book-form.component';
import { MockBookService } from '../../testing/mock-book.service';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
        MockBookFormComponent
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
