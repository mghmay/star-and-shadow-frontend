import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';
import { Film } from '../interfaces/film';
import { APIResponse } from '../interfaces/http';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  apiUrl = ENV.API_URL;
  constructor(private httpClient: HttpClient) {}

  getFilmList(
    page: number,
    title?: string,
    category?: string
  ): Observable<APIResponse<Film>> {
    let params = new HttpParams();
    params = params.append('pageNo', page);
    title ? (params = params.append('title', title)) : null;
    category ? (params = params.append('category', category)) : null;

    const requestOptions = { params: params };
    return this.httpClient.get<APIResponse<Film>>(
      `${this.apiUrl}/films`,
      requestOptions
    );
  }

  searchByFilmId(filmId: number): Observable<Film> {
    return this.httpClient.get<Film>(`${ENV.API_URL}/films/${filmId}`);
  }
}
