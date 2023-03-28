// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// // import { IProduct } from './product';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   //
//   private _producturl = 'https://api.myjson.com/bins/asjsb';
//   constructor(private _http: HttpClient) {}

//   getProducts() {
//     return this._http
//       .get(this._producturl)
//       .map((response: Response) => <any[]>(<unknown>response.json()))
//       .do((data) => console.log(JSON.stringify(data)));
//   }

//   // getproducts(): Observable<IProduct[]> {
//   //   return this._http
//   //     .get(this._producturl)
//   //     .map((response: Response) => <IProduct[]>response.json())
//   //     .do((data) => console.log(JSON.stringify(data)));
//   // }
// }
