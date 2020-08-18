import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
declare const M: any;

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styles: [
  ]
})
export class ArticleCommentsComponent implements OnInit {
  comments: any = {};
  user: any;
  hasComments: number;

  @Input() idPost: number;


  constructor(private blog: BlogService) {
    // console.log(this.idPost);
    M.AutoInit();
  }

  ngOnInit(): void {

    this.blog.getPostWithCommentUsers(this.idPost)
      .subscribe(data => {
        this.comments = data;
        console.log(this.comments.comments.length);
        this.hasComments = this.comments.comments.length;
        this.user = this.comments.comments.user;
      });
  }
  makeComment(comment: string) {
    let val = {
      comentario: comment,
      user_id: 1,
      estado_id: 1,
      post_id: this.comments.id,
    };
    console.log(val);
    let user = this.comments.comments[0].user.nombre;

    this.comments.comments.push(val);
    val["user"] = { nombre: 'Unlogged User' };
    // this.blog.makeAComment(val).subscribe(data => {
    // });
  }
}

