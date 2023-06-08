import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  book: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = history.state.book;
  }
}
