import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: [
  ]
})
export class ArticleComponent implements OnInit {
  @Input() articulo: any = {};

  usuario: any = {};

  urlUsuario: string = 'https://blog-api-laravel.herokuapp.com/api/users/';
  placeHolderImage: string = 'https://picsum.photos/200/300?grayscale';
  request: HttpClient;
  constructor(private http: HttpClient) {
    this.request = this.http;
  }

  ngOnInit(): void {
    this.getUserPublished(this.articulo.id);
  }
  getUserPublished(id: number): void {
    this.request.get(this.urlUsuario + id).subscribe((data: any) => {
      this.usuario = data;
      console.log(data);
    });

  }

}
