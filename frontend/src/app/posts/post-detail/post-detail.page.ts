import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

 post: Post | any;

  constructor(private activatedRoute: ActivatedRoute, private postsServices : PostsService) { }

  ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
               
                let recipeId = paramMap.get('postId') || '';
               this.post  = this.postsServices.getPlace(recipeId)
        })
  }

}
