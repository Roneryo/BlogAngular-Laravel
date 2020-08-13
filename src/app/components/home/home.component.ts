import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  articulos: any = [];

  urlPost: string = 'https://blog-api-laravel.herokuapp.com/api/';
  request: HttpClient;
  constructor(private http: HttpClient) {
    this.request = http;
  }

  ngOnInit(): void {
    this.getData('posts');
  }

  getData(route: string): void {
    this.request.get(this.urlPost + route).subscribe((data: any) => {
      this.articulos = data;
    });
  }

}
