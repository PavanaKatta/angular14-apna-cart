import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from, pipe, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map, tap, share } from 'rxjs/operators';
import { ICategoryType } from '../model/categoryType';

import { Subject, BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  //
  private _lookupUrl = '/assets/categoryTypes.json'; //'https://fakestoreapi.com/products';
  constructor(private _http: HttpClient) {}

  getCategoryTypes(): Observable<ICategoryType[]> {
    return this._http
      .get<ICategoryType[]>(this._lookupUrl)
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
