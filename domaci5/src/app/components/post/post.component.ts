import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import {faThumbsUp, faThumbsDown, faShareSquare} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() post:Post | null=null;

  icon_Like = faThumbsUp;
  icon_Dislike = faThumbsDown;
  icon_Share = faShareSquare;

  constructor() { }

  ngOnInit(): void {
  }

  likePost(){
    if(this.post)
      this.post.likes++;
  }

  sharePost(){
    if(this.post)
      this.post.shares++;
  }

  dislikePost(){
    if(this.post)
      this.post.dislikes++;
  }

}
