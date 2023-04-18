import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
import { Observable, of, from, pipe, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map, tap, share } from 'rxjs/operators';
import { IProduct } from '../model/product';

import { Subject, BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Local variable which stores
  public cartItems = [];
  public products = new Subject();

  public cartCount: number = 0;
  //
  private _producturl = 'https://fakestoreapi.com/products';
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http
      .get<IProduct[]>(this._producturl)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
