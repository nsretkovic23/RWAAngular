import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'domaci5';

  post1:Post ={
    name: "Nikola Sretkovic",
    username:"@nsretkovic",
    userPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    description: "Ovo je moj prvi post! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    postPicture: "https://res.cloudinary.com/practicaldev/image/fetch/s--L-XhY-3C--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/occwslmjubhnouj2awp8.png",
    likes: 7,
    dislikes: 2,
    shares: 0
  }

  post2:Post ={
    name: "React Javascript Library",
    username:"@ReactJS",
    userPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    description: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.", 
    postPicture: "https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png",
    likes: 1500,
    dislikes: 23,
    shares: 112
  }
}
