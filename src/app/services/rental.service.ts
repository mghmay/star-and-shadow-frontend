import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';
import { Rental } from '../interfaces/inventory';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = ENV.API_URL + '/rentals';

  constructor(private http: HttpClient) {}

  postRental(rental: Rental): Observable<Object> {
    return this.http.post(this.apiUrl, JSON.stringify(rental), httpOptions);
  }
}
