import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './book-details/add-book.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookList', component: BookListComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'signupPage', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
