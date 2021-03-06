import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetTodosService {

  private urlTodos: string = 'https://gorest.co.in/public/v1/todos?page=';

  private httpOptions:object = {
    headers: new HttpHeaders({ 
      'Accept': 'application/json',
    })
  } 

  constructor(private http: HttpClient) { }

  // get data from API
  getTodos(p: string) {
    return this.http.get<Object>((this.urlTodos + p), this.httpOptions)
  }

}
