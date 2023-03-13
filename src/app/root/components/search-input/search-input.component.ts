import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: [],
})
export class SearchInputComponent implements OnInit {
  public form = this.fb.group({ query: [''] });

  public constructor(
    private fb: NonNullableFormBuilder,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.form.controls.query.valueChanges
      .pipe(
        debounceTime(500),
        filter((value) => value.trim().length > 3)
      )
      .subscribe((query) => {
        this.navigateForSearching(query);
      });
  }

  public submit(): void {
    const { query } = this.form.value;
    if (query && query.trim().length > 3) {
      this.navigateForSearching(query);
    }
  }

  private navigateForSearching(q: string): void {
    this.router.navigate(['search'], { queryParams: { q } });
  }
}
