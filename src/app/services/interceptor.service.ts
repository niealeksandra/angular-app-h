import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor( public loaderService: LoaderService ) { }

  counter:number = 0; // initialize the counter for api calls

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> {

      this.counter++;
      this.loaderService.isLoading.next(true)
      
    return next.handle(req).pipe(
      finalize(() => {
          this.counter--
          if (this.counter === 0) {
            // if the service is completed - close loader
            this.loaderService.isLoading.next(false)
          }
        }
      )
    )
  }
}
