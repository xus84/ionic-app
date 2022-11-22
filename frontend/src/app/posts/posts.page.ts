import { Component, OnInit } from '@angular/core';
import { Post } from './post-detail/post.model';
import { PostsService} from './post-detail/posts.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
 
  posts : Post[] = []

  constructor( public postService: PostsService) { }

  ngOnInit() {
       this.posts  =  this.postService.getPlaces()
  }

}
