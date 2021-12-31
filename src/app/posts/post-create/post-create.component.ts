import { Post } from './../post.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>(); //listen from the outside

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm){
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    console.log(post);
    this.postCreated.emit(post);
  }
}
