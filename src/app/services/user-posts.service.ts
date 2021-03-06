import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  private urlPosts: string = 'https://gorest.co.in/public/v1/posts?page=';
  private urlComments: string = 'https://gorest.co.in/public/v1/comments?post_id='

  private httpOptions:object = {
    headers: new HttpHeaders({ 
      'Accept': 'application/json',
    })
  } 


  constructor(private http: HttpClient) { }

  // get data from API
  getPosts(p: string) {
    return this.http.get<Object>((this.urlPosts + p), this.httpOptions)
  }

  getComments(id: string) {
    return this.http.get<Object>((this.urlComments + id), this.httpOptions)
  }


}
