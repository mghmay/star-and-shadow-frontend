import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AboutComponent } from './components/about/about.component';
import { FilmLengthPipe } from './utils/pipes/film-length.pipe';
import { RentComponent } from './components/rent/rent.component';
import { NetworkInterceptor } from './interceptors/network.interceptor';
import { LoadingService } from './services/loading.service';
import { FilmService } from './services/film.service';
import { RentalService } from './services/rental.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchBarComponent,
    AboutComponent,
    FilmLengthPipe,
    RentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
    LoadingService,
    FilmService,
    RentalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
