import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cryptocurrency} from '../../../shared/models/Cryptocurrency';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyManagementService {

  baseUrl = environment.apiUrl;
  endpoint = 'listings/latest';
  httpOptions = {
    headers: new HttpHeaders({ 'X-CMC_PRO_API_KEY': '4123ee72-2acc-4555-8708-ff416506af7d' })
  };


  constructor(private http: HttpClient) { }

  getCryptocurrencies(): Observable<Cryptocurrency[]> {
    return this.http.get<Cryptocurrency[]>(`${this.baseUrl}/${this.endpoint}`, this.httpOptions);
  }
}
