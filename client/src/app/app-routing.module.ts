import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
const routes: Routes = [
  { path: '', component: NewUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class HomeLibraryRoutingModule { }
