import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/interfaces/film';
import { APIResponse } from 'src/app/interfaces/http';
import { Rental } from 'src/app/interfaces/inventory';
import { FilmService } from 'src/app/services/film.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  filmSub: Subscription = new Subscription();
  rentalSub: Subscription = new Subscription();
  film: Film = {} as Film;
  rental: Rental = {} as Rental;
  constructor(
    private filmService: FilmService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['filmId']) {
        this.getAboutFilm(params['filmId']);
      }
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
}
