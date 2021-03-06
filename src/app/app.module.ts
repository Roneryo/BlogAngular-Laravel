import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleComponent } from './components/article/article.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArticleCommentsComponent } from './components/article-comments/article-comments.component';
//importar rutas
import { ROUTES } from './app.routes';
import { CommentComponent } from './components/comment/comment.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArticleComponent,
    NavbarComponent,
    ArticleCommentsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
