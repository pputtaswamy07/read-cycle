import { Component } from '@angular/core';
import { BookService, Book } from '../book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: [''],
      publishedYear: [''],
      genre: [''],
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const newBook: Book = this.bookForm.value;
      this.bookService.createBook(newBook).subscribe(
        (response) => {
          console.log('Book added successfully', response);
          // Reset the form or navigate to another page
          this.bookForm.reset();
        },
        (error) => {
          console.error('Error adding book', error);
        }
      );
    }
  }
}
