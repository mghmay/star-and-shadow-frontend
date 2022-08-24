import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment as ENV } from 'src/environments/environment';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  categories: object = ENV.CATEGORY_MODEL.data;
  default: string = '';
  currentCategory: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  changeCategory(e: any): void {
    this.currentCategory = e.target.value;
    this.router.navigate([this.currentCategory]);
  }

  onSubmit(form: NgForm): void {
    if (form.value.search !== '') {
      if (this.currentCategory !== '') {
        this.router.navigate([this.currentCategory], {
          queryParams: { title: form.value.search },
        });
      } else {
        this.router.navigate([''], {
          queryParams: { title: form.value.search },
        });
      }
    }
    form.reset();
  }
}
