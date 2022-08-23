export interface Inventory {
  address: number[];
}

export interface Rental {
  customerId: number;
  filmId: number;
  inventoryId: number;
}
