import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import {faThumbsUp, faThumbsDown, faShareSquare} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() post:Post = {
    name: "",
    username:"",
    userPicture: "",
    description: "",
    postPicture: "",
    likes: 0,
    dislikes: 0,
    shares: 0
  };

  icon_Like = faThumbsUp;
  icon_Dislike = faThumbsDown;
  icon_Share = faShareSquare;

  constructor() { }

  ngOnInit(): void {
  }

  likePost(){
    this.post.likes++;
  }

  sharePost(){
    this.post.shares++;
  }

  dislikePost(){
    this.post.dislikes++;
  }

}
