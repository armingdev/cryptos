import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cryptocurrency} from '../../../shared/models/Cryptocurrency';
import {Observable, pipe} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyManagementService {

  baseUrl = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'X-CMC_PRO_API_KEY': '4123ee72-2acc-4555-8708-ff416506af7d',
      'Content-Type':  'application/json',
    })
  };


  constructor(private http: HttpClient) { }

  getCryptocurrencies(): Observable<Cryptocurrency[]> {
    return this.http.get<Cryptocurrency[]>(`${this.baseUrl}` + '/listings/latest', this.httpOptions);
  }
}
