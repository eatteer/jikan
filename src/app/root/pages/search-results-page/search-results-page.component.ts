import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/jikan/interfaces/jikan.interace';
import { JikanService } from '../../../jikan/services/jikan.service';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styles: [],
})
export class SearchResultsPageComponent {
  public animes: Anime[] = [];

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jikanService: JikanService
  ) {
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      if (!queryParams.has('q')) {
        this.router.navigate(['/filter/airing']);
        return;
      }
      const query = queryParams.get('q')!;
      this.jikanService.getByQuery(query).subscribe((searchAnimeResponse) => {
        this.animes = searchAnimeResponse.data;
      });
    });
  }
}
