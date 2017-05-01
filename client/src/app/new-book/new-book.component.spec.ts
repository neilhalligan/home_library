import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookComponent } from './new-book.component';
import { MockBookFormComponent } from '../../testing/mock-book-form.component.spec';
import { BookService } from '../book.service';
import { MockBookService } from '../../testing/mock-book.service';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewBookComponent,
        MockBookFormComponent ]
    })
    .overrideComponent(NewBookComponent, {
      set: {
        providers: [
          { provide: BookService, useClass: MockBookService }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
