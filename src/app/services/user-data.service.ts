import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private urlUsers: string = 'https://gorest.co.in/public/v1/users?page='
  private httpOptions:object = {
    headers: new HttpHeaders({ 
      'Accept': 'application/json',
    })
  } 

  constructor(private http: HttpClient) { }

  // get data from API
  getUsers(p: string) {
    return this.http.get<Object>((this.urlUsers + p), this.httpOptions)
  }
}
