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
  usuarios: any= {};
  urlUsuario: string = 'http://localhost:8000/api/users/';
  placeHolderImage: string = 'https://picsum.photos/200/300?grayscale';
  request: HttpClient;
  constructor(private http: HttpClient) {
    this.request = http;
  }

  ngOnInit(): void {
    console.log(this.articulo);
    this.request.get(this.urlUsuario + this.articulo.idUsuario).subscribe((data: any) => {
      this.usuario = data;
      console.log(data);
    });
    this.request.get(this.urlUsuario).subscribe((data: any) => {
      this.usuarios = data;
      console.log(data);
    });

  }
  getUser(): void {

  }

}
