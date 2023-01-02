import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Book {
  id: string;
  title: string;
  cover: string;
  authorFirstName: string;
  authorLastName: string;
  pageCount: number;
  releaseDate: string;
}

const books: Book[] = [
  {
    id: '001',
    title: 'Livre 1',
    cover: '🌷',
    authorFirstName: 'JM',
    authorLastName: 'Cordier',
    pageCount: 200,
    releaseDate: '1789',
  },
  {
    id: '002',
    title: 'Livre 2',
    cover: '😊',
    authorFirstName: 'Jérome',
    authorLastName: 'Kriegel',
    pageCount: 120,
    releaseDate: '1879',
  },
  {
    id: '003',
    title: 'Livre 3',
    cover: '❤',
    authorFirstName: 'Ouahid',
    authorLastName: 'Rezaiguia',
    pageCount: 753,
    releaseDate: '2011',
  },
  {
    id: '004',
    title: 'Livre 4',
    cover: '👍',
    authorFirstName: 'Christophe',
    authorLastName: 'Renetteau',
    pageCount: 102,
    releaseDate: '1985',
  },
];

@Injectable()
export class BooksService {
  constructor() {}

  getBooks(): Observable<Book[]> {
    return of(books);
  }
}
