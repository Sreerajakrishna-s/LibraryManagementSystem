import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookRequestService {
  returnBook: any;
  requestBook: any;
  updateBookStatus(books: import("./models/bookmodel").Book[]) {
    throw new Error('Method not implemented.');
  }
  bookRequests: string[] = [];
  getBookReport: any;

  addBookRequest(bookName: string) {
    this.bookRequests.push(bookName);
  }

  getBookRequests() {
    return this.bookRequests;
  }
}
