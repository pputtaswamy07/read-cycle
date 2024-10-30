import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './book-details/add-book.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { DonateComponent } from './donate/donate.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bookList', component: BookListComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'donate', component: DonateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
