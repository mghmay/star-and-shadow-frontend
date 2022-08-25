import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/interfaces/film';
import { APIResponse } from 'src/app/interfaces/http';
import { FilmService } from 'src/app/services/film.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public films: Array<Film> = [];
  filmSub: Subscription = new Subscription();
  querySub: Subscription = new Subscription();
  routeSub: Subscription = new Subscription();
  scrollSub: Subscription = new Subscription();
  title: string = '';
  category: string = '';
  page: number = 0;

  constructor(
    private router: Router,
    private filmService: FilmService,
    private activatedRoute: ActivatedRoute,
    private loader: LoadingService
  ) {}

  ngOnInit(): void {
    console.log(this.loader);
    this.routeSub = this.activatedRoute.queryParams.subscribe((params) => {
      this.title = params['title'];
      this.category = params['category'];
      this.searchFilms(this.page, this.title, this.category);
    });
  }

  openFilm(id: number): void {
    this.router.navigate(['about', id]);
  }

  onScroll(): void {
    this.filmSub = this.filmService
      .getFilmList(this.page++, this.title, this.category)
      .subscribe((response: APIResponse<Film>) => {
        response.data.forEach((film) => this.films.push(film));
      });
  }

  searchFilms(page: number, title?: string, category?: string): void {
    this.filmSub = this.filmService
      .getFilmList(page, title, category)
      .subscribe((response: APIResponse<Film>) => {
        this.films = response.data;
      });
  }
  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.filmSub) {
      this.filmSub.unsubscribe();
    }
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }
}
