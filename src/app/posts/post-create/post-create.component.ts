import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  newPost = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSavePost(){
    this.newPost = 'New post works!';
  }
}
