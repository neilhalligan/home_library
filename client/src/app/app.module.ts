import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeLibraryRoutingModule } from './app-routing.module';
import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NewUserComponent,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeLibraryRoutingModule
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
