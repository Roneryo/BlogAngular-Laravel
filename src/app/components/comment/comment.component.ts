import { Component, OnInit, Output, EventEmitter, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styles: [
  ]
})
export class CommentComponent implements OnInit {

  @Output() nuevoComentario: EventEmitter<any>;

  constructor() {
    this.nuevoComentario = new EventEmitter();
  }

  ngOnInit(): void {
  }
  newComment(text: string) {

    this.nuevoComentario.emit(text);

  }

}
