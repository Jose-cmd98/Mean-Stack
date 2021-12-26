import { Post } from './posts/post.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postsAdded: Post[] = [];

 onPostAdded(post: Post){
   this.postsAdded.push(post);
 }
}
