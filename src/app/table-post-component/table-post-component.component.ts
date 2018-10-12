import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-table-post-component',
  templateUrl: './table-post-component.component.html',
  styleUrls: ['./table-post-component.component.css']
})
export class TablePostComponentComponent implements OnInit {

  posts: Post[];
  loading: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getList()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  getComments(post: Post) {

    if (post.comments) {
      post.showPost = !post.showPost;
    } else {
      this.loading = true;
      this.postService.getComments(post.id)
        .subscribe( (comments) => {
          post.comments = comments;
          post.showPost = !post.showPost;
          this.loading = false;
        });
    }
  }

}
