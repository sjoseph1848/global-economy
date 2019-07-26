import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  
  constructor(private _http:HttpClient) { }

  amazonStock(){
    return this._http.get("https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2019-03-12&to=2019-03-19")
    .pipe(map(result => result));
  }
}
