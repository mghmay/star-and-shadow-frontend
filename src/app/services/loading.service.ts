import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingState = new BehaviorSubject<boolean>(false);
  loading = this.loadingState.asObservable();
  constructor() {}

  show() {
    this.loadingState.next(true);
  }
  hide() {
    this.loadingState.next(false);
  }
}
