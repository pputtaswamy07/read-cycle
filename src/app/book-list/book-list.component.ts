import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BookListComponent implements OnInit {
  genres: string[] = [
    'Action',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Thriller',
  ];
  languages: string[] = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Hindi',
  ];

  selectedGenre: string = '';
  selectedLanguage: string = '';
  books: Book[] = [];
  filteredBooks: Book[] = [];
  booksFetched: boolean = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // No initial book fetching
  }

  onSearch(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(
      (books) => {
        this.books = books;
        this.filterBooks();
        this.booksFetched = true;
      },
      (error) => {
        console.error('Error fetching books', error);
      }
    );
  }

  filterBooks(): void {
    this.filteredBooks = this.books.filter((book) => {
      return (
        (this.selectedGenre === '' || book.genre === this.selectedGenre) &&
        (this.selectedLanguage === '' ||
          book.language === this.selectedLanguage)
      );
    });
  }
}
