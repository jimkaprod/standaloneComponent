import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]> = this.booksService.getBooks().pipe(delay(0.1));
  constructor(private booksService: BooksService) {}

  ngOnInit() {}

  trackByBookId(index: number, book: Book): string {
    return book.id;
  }
}
