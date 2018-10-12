import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com';

  constructor( private http: HttpClient ) { }

  getList() {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }

  getComments(id: number) {
    return this.http.get(`${this.url}/posts/${id}/comments`);
  }
}
