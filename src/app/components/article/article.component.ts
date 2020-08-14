import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: [
  ]
})
export class ArticleComponent implements OnInit {
  @Input() articulo: any = {};

  usuario: any = {};
  constructor(private blog: BlogService) {
  }

  ngOnInit(): void {
    // this.getUserPublished(this.articulo.id);
    this.blog.getOneUser(this.articulo.id)
      .subscribe(data => {
        this.usuario = data;
        // console.log(data);
      });
  }


}
