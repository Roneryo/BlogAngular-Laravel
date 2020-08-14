import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  urlPost: string = 'https://blog-api-laravel.herokuapp.com/api/';

  constructor(private http: HttpClient) {
    console.log('Blog service');
  }

  public getPosts() {
    return this.http.get(this.urlPost + 'posts');
  }

  public getUsers() {
    return this.http.get(this.urlPost + 'users');
  }
  public getOneUser(id: number) {
    return this.http.get(this.urlPost + `users/${id}`);
  }
  public getPostWithCommentUsers(id: number) {
    return this.http.get(this.urlPost + `posts/${id}/comments`);
  }
}
