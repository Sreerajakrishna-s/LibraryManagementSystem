// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-news',
//   templateUrl: './news.component.html',
//   styleUrls: ['./news.component.css']
// })
// export class NewsComponent {

// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews() {
    this.apiService.getNews().subscribe(
      (data: any) => {
        console.log(data);
        this.articles = data.articles;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

