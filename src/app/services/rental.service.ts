import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';
import { Rental } from '../interfaces/inventory';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = ENV.API_URL + 'rental';

  constructor(private http: HttpClient) {}

  postRental(rental: Rental): Observable<Object> {
    return this.http.post(this.apiUrl, JSON.stringify(rental));
  }
}
