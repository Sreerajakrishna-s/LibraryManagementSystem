import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Book } from '../models/bookmodel';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {
  fetchBookImage(image: string) {
    throw new Error('Method not implemented.');
  }
  private default = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAChCAMAAAD3ErHsAAAAJ1BMVEX////Z2dnY2NjX19fh4eHn5+fd3d38/Pzu7u7z8/Pr6+v39/fk5OR1A7rfAAAD0ElEQVR4nO2a247sKAxFCzDm+v/fO7ZJCEkgyTmjeRl5S63uamEWNg4lsfP7qVQqlUqlUqlUKpVKpVL9v1Sy9zmmVMJfTxFKipGneZsiOmcdy0KNfwwMJVfY4p1LL6OTM5ustQZ8+o4LyaNE7frCOsYzLn6jhQzG2WGdn1hYAY2UQcKceS08kbzdh5MMQsUvLAstOvWF2jcakbaBWPNWdbCvrGg3VuNVlFkcxgdSRCd1w3F3n1mhxAqAA0smor7i0kBZhBUhUTnOGwsWYd3KlXbI4oXFk1UqDtH8LCx4rrMz/roU4Klo9/yUBVytCavT8F6UhFb28540s3gP1yw3ZREN5Fm47lrm3ZyXl1nukVWimbKoaTg1V8c6Bl6Am2S7zRbLI+vo+ZtCpSQsHjkUqp810138bX34t6yW2tHJiT8tknpjFTAvrF+gHdhhUXZq/YzvrHrbzOLR4iuLm4FahDskM/XhAe8s6pHT8xCAT9kvLKkjfVnQsflQvxOLpx5aqshp9olFHWFc5LRwdZBc8+K5h44S1DfWr1ph2XmD3Vk8LZ5YFqin/wuWD6gsZSlLWcpSlrKUpSxlKUtZylKWspSlrGdW+MQyWKv3MYXFfd0Li50b72vzAl5Z4h1YZk7tjSdWycDX55tn8YXV3RvnzB23ZIVsXHdUzAdWlPvq9mPEcbhebC5YqRrXDR+5Yn9llZxSijlX2Bdp7Zk2ZSXo1o2BmtmtS7m8sIaSlN1NORscE1ZCITmL9WwIPrIIkLmLqjiJpSSPQrPHne2NVWpbEWQOoJp4Dvf0KTyyxLLYxPeZQEFiVdjuFF1ZGdsNLo2UO9AjXP6/Zl3FQQgy235BfmY1l0jGjPbhoSeWHdQD5C54uyM/sWJLH4fFuXP4nCWthEDFzixfoU+xeT5iSw2sUF0j9VVR+B4t4exkzVi+5tK6KFCLiEfM43FIjRvyYLX67UlhA3G3l3a+hULnSJ6ytkbPgM0a5ZOGMzUgLcPWGD+gnZXEy5HqyhgpYBON5a5sU05Y9CuCGMSTLUYGIbTeal6AiFti3K6xpzgglgnLQAZzolz6g0EG5M+DJf/DRYRp/nS+s+x+bHIdJBMAtkplm1yzMpE9yM6y8hlb4ST1U0SfztxY2zLYIY4XY14OEy6v7H9ncd9IoXy+vqoQ6Pigb7C+/itL7P/16wbSNa37N++G18/W9ToiygsCVxZlCu+vNbADTaUSFiXl07NV1CKAynliwef3GQI9M8SCm6G8jkgweFLhc1wbHn7Lws31L948UalUKpVKpVKpVCqVSqV60T+IfzzFG8lRYAAAAABJRU5ErkJggg==';
  private books: Book[] = [
    {
      bookId: '1',
      title: 'It Starts with Us',
      author: 'Collen Hover',
      publicationDate: '2022-07-05',
      image: 'https://m.media-amazon.com/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg',
      category: 'fiction',
      contentUrl:'',
    },
    {
      bookId: '2',
      title: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J.K. Rowling',
      publicationDate: '1997-06-26',
      image: 'https://m.media-amazon.com/images/I/51SkIDTd9rL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
      category: 'Fantasy',
      contentUrl:'',
    },
    

  

   
  


  ];

  constructor() { }

  getBookById(id: string): Observable<Book> {
    return of(this.books.find(b => b.bookId === id)).pipe(
      map((book: any) => book ?? null)
    );
  }

  getAllBooks(): Observable<Book[]> {
    return of(this.books);
  }

  getBooksByCategories(category: string): Observable<Book[]> {
    const filteredBooks = this.books.filter(book => book.category === category);
    return of(filteredBooks);

  }




}

