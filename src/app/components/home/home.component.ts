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
  @Output() usuarios: any = [];

  urlPost: string = 'http://localhost:8000/api/posts/';

  constructor(private http: HttpClient) {
    this.getArticulos(http);
  }

  ngOnInit(): void {
  }

  getArticulos(http: HttpClient): void {
    http.get(this.urlPost).subscribe((data: any) => {
      this.articulos = data;
    });
  }

}
