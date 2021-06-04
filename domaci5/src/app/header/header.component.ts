import { Component, Injectable, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { from, interval, Observable, of, timer } from 'rxjs';
import { debounce, throttleTime } from 'rxjs/operators';
import { PostListComponent } from '../components/post-list/post-list.component';
import { Post } from '../models/post';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {

  public newUsername:string="";

  icon_Search = faSearch;

  constructor(private postList:PostListComponent) {
   }

  ngOnInit(): void {
  }

  inputResult(value:string){
    this.postList.usernameSearch=value;
    this.postList.listByUsername();
  }


}
