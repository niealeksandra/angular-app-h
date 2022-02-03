import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // show and hide loader
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$ = this.isLoading.asObservable()

  constructor() { }
}
