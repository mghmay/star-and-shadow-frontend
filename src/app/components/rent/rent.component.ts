import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Film } from 'src/app/interfaces/film';
import { Inventory } from 'src/app/interfaces/inventory';
import { environment as ENV } from 'src/environments/environment';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss'],
})
export class RentComponent implements OnInit {
  @Input() currentFilm: Film = {} as Film;
  inventory: Inventory = {} as Inventory;

  constructor() {}

  ngOnInit(): void {
    console.log(this.currentFilm.inventory);
    this.inventory = this.currentFilm.inventory;
  }
  onSubmit(form: NgForm): void {
    const inventoryId = this.currentFilm.inventory[form.value.inventory][0];
    const filmId = this.currentFilm.filmId;
    const customerId = ENV.MODEL_CUSTOMER.customerId;
    console.log(inventoryId, filmId, customerId);
  }
}
