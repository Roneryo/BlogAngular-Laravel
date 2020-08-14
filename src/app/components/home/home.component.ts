import { BlogService } from './../../services/blog.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  articulos: any[] = [];

  // urlPost: string = 'https://blog-api-laravel.herokuapp.com/api/';
  constructor(private blog: BlogService) {
  }
  ngOnInit(): void {
    // this.getData('posts');
    this.blog.getPosts().subscribe((data: any) => {
      this.articulos = data;
      console.log(data);
    });
  }

  // getData(route: string): void {
  //   this.request.get(this.urlPost + route).subscribe((data: any) => {
  //     this.articulos = data;
  //   });
}


