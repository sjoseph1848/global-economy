import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  
  constructor(private _http:HttpClient) { }

  findStock(stock:string){
    return this._http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?from=2009-03-10`)
    .pipe(map(result => result));
  }
}
