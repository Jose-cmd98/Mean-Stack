import { PostsService } from './../posts.service';
import { Post } from './../post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];


  constructor(public postsService:PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

}
