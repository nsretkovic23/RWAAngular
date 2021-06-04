import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { } //umesto deklaracije iznad, pa onda inicijalizacije u telu konstruktora, automatski se pravi atribut te klase

  getAllPosts(){
    return this.httpClient
          .get<Post[]>(`${environment.apiUrl}/posts`)
          .pipe(catchError(errorHandler));
  }

  getPostsByUsername(username:string){
    return this.httpClient
      .get<Post[]>(`${environment.apiUrl}/posts/?username=${username}`)
      .pipe(catchError(errorHandler));
  }
}

const errorHandler = (error: HttpErrorResponse) => { //ovde treba custom handler
  const errorMessage =
    error.status === 0
      ? `Can't connect to API ${error.error}`
      : `Backend returned code ${error.status}`;

  return throwError(errorMessage);
};
