import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-details/book-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookList', component: BookListComponent },
  { path: 'bookDetails', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
