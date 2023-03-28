import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
import { Observable, of, from, pipe } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //
  private _producturl = 'https://fakestoreapi.com/productsb';
  constructor(private _http: HttpClient) {}

  getproducts(): Observable<IProduct[]> {
    return this._http.get(this._producturl);
    // .map((response: Response) => <IProduct[]>response.json())
    // .do((data) => console.log(JSON.stringify(data)));
  }
}
