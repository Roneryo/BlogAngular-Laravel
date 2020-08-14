import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
declare const M: any;

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styles: [
  ]
})
export class ArticleCommentsComponent implements OnInit {
  @Input() idPost: number;
  comments: any = [];
  user: any;
  hasComments: number
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

}
