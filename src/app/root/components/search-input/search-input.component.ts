import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: [],
})
export class SearchInputComponent implements OnInit {
  public queryControl = new FormControl('', { nonNullable: true });

  public constructor(private router: Router) {}

  public ngOnInit(): void {
    this.queryControl.valueChanges
      .pipe(
        debounceTime(500),
        filter((value) => value.trim().length > 3)
      )
      .subscribe((value) => {
        this.router.navigate(['search'], { queryParams: { q: value } });
      });
  }
}
