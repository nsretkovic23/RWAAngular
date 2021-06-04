import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeaderComponent } from 'src/app/header/header.component';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class PostListComponent implements OnInit {

  posts:Observable<Post[]> = of([]);
  public usernameSearch:string='@nsretkovic';

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
   //this.posts=this.postsService.getAllPosts();
   //console.log(this.posts)
    this.posts=this.listByUsername();
  }


  public listByUsername(){
    console.log(this.usernameSearch);
    console.log(this.posts);
    return this.postsService.getPostsByUsername(this.usernameSearch);
  }
}
