import { Component, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loadingSub: Subscription = new Subscription();
  loading: boolean = false;

  constructor(private loader: LoadingService) {}

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loader.loading
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading: any) => {
        this.loading = loading;
      });
  }
}
