import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './book-details/add-book.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookList', component: BookListComponent },
  { path: 'addBook', component: AddBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
