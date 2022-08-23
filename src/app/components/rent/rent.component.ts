import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Film } from 'src/app/interfaces/film';
import { Inventory, Rental } from 'src/app/interfaces/inventory';
import { environment as ENV } from 'src/environments/environment';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss'],
})
export class RentComponent implements OnInit, OnChanges {
  @Input() currentFilm: Film = {} as Film;
  @Output() onRentFilm: EventEmitter<any> = new EventEmitter<any>();
  inventoryLocation: string = '';
  inventory: Inventory = {} as Inventory;

  form = new FormGroup({
    inventory: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.inventory = this.currentFilm.inventory;
  }

  get f() {
    return this.form.controls;
  }

  changeInventory(e: any): void {
    this.inventoryLocation = e.target.value;
  }
  onSubmit(): void {
    const inventoryId = this.currentFilm.inventory[this.inventoryLocation][0];
    const staffId = ENV.STAFF_MODEL.staffId;
    const customerId = ENV.MODEL_CUSTOMER.customerId;

    if (!customerId) {
      alert('Please log in');
    }
    const rental: Rental = {
      inventoryId: inventoryId,
      staffId: staffId,
      customerId: customerId,
    };
    this.onRentFilm.emit(rental);
  }
}
