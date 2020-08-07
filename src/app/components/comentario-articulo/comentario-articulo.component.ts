import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comentario-articulo',
  templateUrl: './comentario-articulo.component.html',
})
export class ComentarioArticuloComponent implements OnInit {
  @Input() articulo: any = {};
  @Input() idPublicacion: any = {};
  @Input() usuarios: any = {};
  urlComentario: string = 'http://localhost:8000/api/comments/';
  urlUser: string = 'http://localhost:8000/api/users/';

  comentarios: any = [];
  user: any = [];
  request: HttpClient;

  constructor(private http: HttpClient) {
    http.get(this.urlComentario).subscribe((data: any) => {
      this.comentarios = data;
      console.log(data);
    });
    this.request = http;

  }
  ngOnInit(): void {
    console.log(this.idPublicacion);

    // this.usuarios.find(element => element.id === 1);
    // console.log(this.usuarios);
    this.request.get(this.urlUser + this.comentarios.comentario).subscribe((data: any) => {
      this.usuarios = data;
      console.log(data);
      });
    }
  }

