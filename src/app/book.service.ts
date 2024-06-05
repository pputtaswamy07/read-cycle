import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  owner: string;
  exchangeFor: string; // Description of the book they want in exchange
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Book A',
      author: 'Author A',
      description: 'Description A',
      owner: 'User1',
      exchangeFor: 'Any Sci-fi book',
    },
    {
      id: 2,
      title: 'Book B',
      author: 'Author B',
      description: 'Description B',
      owner: 'User2',
      exchangeFor: 'Any Romance book',
    },
    // User can add more books if needed
  ];

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  addBook(book: Book): void {
    this.books.push(book);
  }
}
