import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/interfaces/film';
import { APIResponse } from 'src/app/interfaces/http';
import { Rental } from 'src/app/interfaces/inventory';
import { FilmService } from 'src/app/services/film.service';
import { LoadingService } from 'src/app/services/loading.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  filmSub: Subscription = new Subscription();
  rentalSub: Subscription = new Subscription();
  loadingSub: Subscription = new Subscription();
  film: Film = {} as Film;
  rental: Rental = {} as Rental;
  loading: boolean = false;
  constructor(
    private filmService: FilmService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private loader: LoadingService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['filmId']) {
        this.getAboutFilm(params['filmId']);
      }
    });
    this.loadingSub = this.loader.loading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  getAboutFilm(filmId: number) {
    this.filmSub = this.filmService
      .searchByFilmId(filmId)
      .subscribe((response: any) => {
        this.film = response.data;
      });
  }

  rentFilm(rental: Rental): void {
    this.rentalSub = this.rentalService
      .postRental(rental)
      .subscribe((response: any) => {
        if (response.status === 200) {
          alert('Rental created');
        } else {
          alert('Hmm, something went wrong' + response.message);
        }
      });
  }
  ngOnDestroy(): void {
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
    if (this.filmSub) {
      this.filmSub.unsubscribe();
    }
    if (this.rentalSub) {
      this.rentalSub.unsubscribe();
    }
  }
}
