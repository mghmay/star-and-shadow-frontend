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

  getFilmList(search?: string): Observable<APIResponse<Film>> {
    if (search) {
      console.log(search);
      return this.httpClient.get<APIResponse<Film>>(
        `${ENV.API_URL}/films/search/title?title=${search}`
      );
    } else {
      return this.httpClient.get<APIResponse<Film>>(`${ENV.API_URL}/films/`);
    }
  }

  searchByFilmId(filmId: number): Observable<Film> {
    return this.httpClient.get<Film>(`${ENV.API_URL}/films/${filmId}`);
  }
}
