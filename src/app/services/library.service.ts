import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Book, Order } from '../models/model';
import { BookCategory } from '../models/bookcategory.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private baseUrl = 'http://localhost:3000/api/library'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  createAccount(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/CreateAccount`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Login?email=${email}&password=${password}`);
  }

  getAllBooks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetAllBooks`);
  }

  orderBook(userId: number, bookId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/OrderBook/${userId}/${bookId}`);
  }

  getOrders(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetOrders/${id}`);
  }

  getAllOrders(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetAllOrders`);
  }

  returnBook(bookId: string, userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ReturnBook/${bookId}/${userId}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetAllUsers`);
  }

  changeBlockStatus(status: number, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ChangeBlockStatus/${status}/${id}`);
  }

  changeEnableStatus(status: number, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ChangeEnableStatus/${status}/${id}`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetAllCategories`);
  }

  insertBook(book: Book): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/InsertBook`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/DeleteBook/${id}`);
  }

  insertCategory(bookCategory: BookCategory): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/InsertCategory`, bookCategory);
  }
  getOrdersOfUser(userId: number): Observable<Order[]> {
    const url = `${this.baseUrl}/users/${userId}/orders`;
    return this.http.get<Order[]>(url);
  }
}
