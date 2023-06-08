import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookRequestService } from 'src/app/book-request.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any;
  isReading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookRequestService: BookRequestService
  ) { }

  ngOnInit() {
    this.book = history.state.book;
  }

  toggleReadingMode() {
    this.isReading = !this.isReading;
  }

  readNow() {
    this.router.navigate(['/readbook'], { state: { book: this.book, contentUrl: this.book.contentUrl } });
    console.log('Reading book:', this.book.content);
    this.isReading = true;
  }
  

  requestBook() {
    this.bookRequestService.addBookRequest(this.book.title);
    alert('Book requested successfully!');
  }
  
  
}
