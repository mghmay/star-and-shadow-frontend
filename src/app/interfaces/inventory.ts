export interface Inventory {
  address: number[];
}

export interface Rental {
  customerId: number;
  staffId: number;
  inventoryId: number;
}
