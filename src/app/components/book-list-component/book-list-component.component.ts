import { Component, OnInit, ViewChild, TemplateRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetailsService } from 'src/app/-services/detail.service';
import { Book } from 'src/app/models/bookmodel';

@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list-component.component.html',
  styleUrls: ['./book-list-component.component.css']
})
export class BookListComponentComponent implements OnInit {
  @ViewChild('navigationTemplate', { static: true }) navigationTemplate!: TemplateRef<any>;
  availableBooks: any[] = [];
  showBooksList: boolean = true;
  showBookDetails: boolean = false;

  filteredBooks: any[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  totalBooks: number = 0;
  filterCriteria: any = {
    title: '',
    author: '',
    subject: '',
    publishDate: ''
  };
  selectedBookContent: any;
  bookService: any;

  constructor(private router: Router, private route: ActivatedRoute,bookService: BookDetailsService) {}

  ngOnInit() {
    this.availableBooks = [
      {
        title: 'Autobiography of Mahatma',
        author: 'Satya Ke Prayog',
        category: 'Category 1',
        image: 'https://m.media-amazon.com/images/I/81XqXdOE5mS._AC_UY218_.jpg'
      },
      {
        title: 'Win your inner battles',
        author: 'Darius',
        category: 'Category 1',
        image: 'https://m.media-amazon.com/images/I/61fZGRSB3XS._AC_UY218_.jpg'
      },
      {
        title: 'The Psycology of Money',
        author: 'Morgon Housal',
        category: 'Self help',
        image: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg'
      },
      {
        title: 'Success',
        author: 'Michael Dudell',
        category: 'Motivation',
        image: 'https://m.media-amazon.com/images/I/81RUJUs+8RL._AC_UY218_.jpg'
      },
      {
        title: 'Public Speaking to win',
        author: 'David meyer',
        category: 'Motivation',
        image: 'https://m.media-amazon.com/images/I/61OGgWiXqOL._AC_UY218_.jpg'
      },
      {
        title: 'Rework',
        author: 'David',
        category: 'Self help',
        image: 'https://m.media-amazon.com/images/I/61GFc+k-5PL._AC_UY218_.jpg'
      },
      {
        title: 'Hooked',
        author: 'NIr Eyal',
        category: 'Self help',
        image: 'https://m.media-amazon.com/images/I/81L8JOVXJtL._AC_UY218_.jpg'
      },
      {
        title: 'I came upon a lighthouse',
        author: 'Christ Ruther',
        category: 'Comic',
        image: 'https://m.media-amazon.com/images/I/81ILDpQVcxL._AC_UY218_.jpg'
      },
      {
        title: 'Just Keep Buying',
        author: 'Nick magguilli',
        category: 'Category 1',
        image: 'https://m.media-amazon.com/images/I/51v0KSrH74L._AC_UY218_.jpg'
      },
      {
        title: 'Expert Secrets',
        author: 'Daniel wagner',
        category: 'Self Help',
        image:'https://m.media-amazon.com/images/I/71FHu+fg5fL._AC_UY218_.jpg'
      },
      {
        title: 'Expert Secrets',
        author: 'Daniel wagner',
        category: 'Self Help',
        image:'https://m.media-amazon.com/images/I/71FHu+fg5fL._AC_UY218_.jpg'
      },
      {
        title: 'Expert Secrets',
        author: 'Daniel wagner',
        category: 'Self Help',
        image:'https://m.media-amazon.com/images/I/71FHu+fg5fL._AC_UY218_.jpg'
      },
      {
        title: 'Expert Secrets',
        author: 'Daniel wagner',
        category: 'Self Help',
        image:'https://m.media-amazon.com/images/I/71FHu+fg5fL._AC_UY218_.jpg'
      },

    ];

    this.filteredBooks = this.availableBooks;
    this.totalBooks = this.availableBooks.length;
  }

  filterBooks() {
    this.filteredBooks = this.availableBooks.filter(book =>
      book.author.toLowerCase().includes(this.filterCriteria.author.toLowerCase())
      && book.title.toLowerCase().includes(this.filterCriteria.title.toLowerCase())
      && book.subject.toLowerCase().includes(this.filterCriteria.subject.toLowerCase())
      && book.publishDate.toLowerCase().includes(this.filterCriteria.publishDate.toLowerCase())
    );
    this.totalBooks = this.filteredBooks.length;
    this.currentPage = 1;
  }

 
  getTotalPages(): number {
    return Math.ceil(this.totalBooks / this.pageSize);
  }

  getPaginatedBooks(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredBooks.slice(startIndex, endIndex);
  }
  selectedBook: any = null;

  toggleReadingMode(book: any) {
    this.selectedBook = book;
    this.selectedBookContent = book.content;
  }
  toggleBookDetails(book: any) {
    this.router.navigate(['/book-details'], { state: { book } });
  }
  readBook(book: any) {
    this.router.navigate(['/readbook'], { state: { book } });
  }
  // getBookCount(): number {
  //   return this.availableBooks.length;
  // }
  books: Book[] = [];
  // filteredBooks: Book[] = [];
  bookRows: Book[][] = [];
  // currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  totalPages: number = 0;
  cardsPerRow: number = 4;
  search: any = {
    title: '',
    author: '',
    subject: '',
    publishDate: ''
  };
  counts: any = {
    title: 0,
    author: 0,
    subject: 0,
    publishDate: 0
  };

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.adjustCardsPerRow();
    this.generateBookRows();
  }

  getBooks() {
    this.bookService.getAllBooks().subscribe((books: Book[]) => {
      this.books = books;
      this.filteredBooks = books;
      this.totalItems = this.books.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.adjustCardsPerRow();
      this.generateBookRows();
    });
  }

  adjustCardsPerRow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      this.cardsPerRow = 4;
    } else if (screenWidth >= 992) {
      this.cardsPerRow = 3;
    } else if (screenWidth >= 768) {
      this.cardsPerRow = 2;
    } else {
      this.cardsPerRow = 1;
    }
  }

  generateBookRows() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const slicedBooks = this.filteredBooks.slice(start, end);

    this.bookRows = [];
    for (let i = 0; i < slicedBooks.length; i += this.cardsPerRow) {
      const row = slicedBooks.slice(i, i + this.cardsPerRow);
      this.bookRows.push(row);
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.generateBookRows();
    }
  }

  getBookCount(criterion: string): number {
    let count = 0;
    switch (criterion) {
      case 'title':
        count = this.filteredBooks.length;
        break;
      case 'author':
        count = this.filteredBooks.reduce(
          (sum, book) => (book.author === this.search.author ? sum + 1 : sum),
          0
        );
        break;
      case 'subject':
        count = this.filteredBooks.reduce(
          (sum, book) => (book.category === this.search.subject ? sum + 1 : sum),
          0
        );
        break;
      case 'publishDate':
        count = this.filteredBooks.reduce(
          (sum, book) => (book.publicationDate === this.search.publishDate ? sum + 1 : sum),
          0
        );
        break;
      default:
        break;
    }
    return count;
  }

  applysearch() {
    this.filteredBooks = this.books.filter((book: Book) => {
      const { title, author, subject, publishDate } = this.search;
      const bookTitle = book.title.toLowerCase();
      const bookAuthor = book.author.toLowerCase();
      const bookSubject = book.category.toLowerCase();
      const bookPublishDate = book.publicationDate.toLowerCase();

      return (
        bookTitle.includes(title.toLowerCase()) &&
        bookAuthor.includes(author.toLowerCase()) &&
        bookSubject.includes(subject.toLowerCase()) &&
        bookPublishDate.includes(publishDate.toLowerCase())
      );
    });

    this.totalItems = this.filteredBooks.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.generateBookRows();

    this.counts.title = this.getBookCount('title');
    this.counts.author = this.getBookCount('author');
    this.counts.subject = this.getBookCount('subject');
    this.counts.publishDate = this.getBookCount('publishDate');
  }
}
