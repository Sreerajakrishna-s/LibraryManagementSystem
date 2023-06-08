import { Injectable } from '@angular/core';
import { Observable, mergeMap, of } from 'rxjs';
import { Book } from '../models/bookmodel';
import { BookDetailsService } from './detail.service';

@Injectable({
  providedIn: 'root'
})
export class BookRequestService {
  private bookReport: Book[] = [];
  daysLeftMap: any;
  previousUser: any;
  authService: any;

  constructor(private bookDetailsService: BookDetailsService) {
    this.loadBookReport();
  }

  private loadBookReport(): void {
    const storedBookReport = sessionStorage.getItem('bookReport');
    if (storedBookReport) {
      this.bookReport = JSON.parse(storedBookReport);
    }
  }

  private saveBookReport(): void {
    sessionStorage.setItem('bookReport', JSON.stringify(this.bookReport));
  }

  clearBookReport() {
    const currentUser = this.authService.getCurrentUser();

    if (currentUser !== this.previousUser) {
      this.bookReport = [];
    }

    this.previousUser = currentUser;
  }

  requestBook(bookId: string): Observable<Book | null> {
    return this.bookDetailsService.getBookById(bookId).pipe(
      mergeMap((book: Book | null) => {
        if (book) {
          return this.simulateServerRequest(book);
        } else {
          return of(null);
        }
      })
    );
  }

  getBookReport(): Observable<Book[]> {
    return of(this.bookReport);
  }

  private simulateServerRequest(book: Book): Observable<Book> {
    return new Observable<Book>(observer => {
      setTimeout(() => {
        book.status = 'Issued';
        book.issuedDate = new Date();
        const dueDate = new Date(book.issuedDate);
        dueDate.setDate(dueDate.getDate() + 20);
        book.dueDate = dueDate;

        this.bookReport.push(book);
        this.saveBookReport();

        observer.next(book);
        observer.complete();
      }, 2000);
    });
  }

  returnBook(bookId: string): Observable<Book | null> {
    const bookIndex = this.bookReport.findIndex((book) => book.bookId === bookId);
    if (bookIndex !== -1) {
      const book = this.bookReport[bookIndex];
      book.status = 'Returned';
      book.issuedDate = undefined;
      book.dueDate = undefined;
      this.bookReport.splice(bookIndex, 1);

      sessionStorage.setItem('bookReport', JSON.stringify(this.bookReport));

      sessionStorage.removeItem('issueDate');
      sessionStorage.removeItem('dueDate');

      return of(book);
    } else {
      return of(null);
    }
  }

  updateDaysLeft(bookId: string, daysLeft: number) {
    this.daysLeftMap[bookId] = daysLeft;
    sessionStorage.setItem('daysLeftMap', JSON.stringify(this.daysLeftMap));
  }
}
