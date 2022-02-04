import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public isUsers: BehaviorSubject<boolean> = new BehaviorSubject<any>([]);
  public users$ = this.isUsers.asObservable()

  public isPosts: BehaviorSubject<boolean> = new BehaviorSubject<any>([]);
  public posts$ = this.isPosts.asObservable()

  public isTodos: BehaviorSubject<boolean> = new BehaviorSubject<any>([]);
  public todos$ = this.isTodos.asObservable()

  constructor() { }
}
