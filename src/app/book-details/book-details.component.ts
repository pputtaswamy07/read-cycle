import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService, Book } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  standalone: true, //to import these components directly into other components
  imports: [CommonModule],
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;
  proposal: string = '';

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.bookService.getBook(bookId);
  }

  proposeExchange(): void {
    alert(`Proposal submitted: ${this.proposal}`);
  }
}
