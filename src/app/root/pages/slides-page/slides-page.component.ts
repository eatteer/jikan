import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JikanService } from '../../../jikan/services/jikan.service';
import { forkJoin } from 'rxjs';
import { Anime, Filter } from 'src/app/jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-slides-page',
  templateUrl: './slides-page.component.html',
  styles: [],
})
export class SlidesPageComponent {
  public pages = [1, 2, 3];
  public animesChunks: Array<Anime[]> = [];
  public filter!: Filter;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jikanService: JikanService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (!params.has('filter')) {
        this.router.navigate(['/filter/airing']);
        return;
      }
      const filter = params.get('filter')! as Filter;
      const isValidFilter = Object.values(Filter).includes(filter);
      this.filter = filter as Filter;
      this.fetchAnimes();
      if (!isValidFilter) {
        this.router.navigate(['/filter/airing']);
        return;
      }
    });
  }

  public fetchAnimes(): void {
    console.log('FETCHING ANIMES IN PARALLEL');
    const observables = this.pages.map((page) => {
      return this.jikanService.getTopAnime({
        filter: this.filter,
        page,
      });
    });

    forkJoin(observables).subscribe((topAnimeResponses) => {
      this.animesChunks = topAnimeResponses.map((response) => {
        const { data } = response;
        return [...data, ...data];
      });
    });
  }
}
