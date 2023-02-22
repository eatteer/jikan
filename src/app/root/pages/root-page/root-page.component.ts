import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { JikanService } from '../../../jikan/services/jikan.service';
import { Anime } from '../../../jikan/interfaces/top-anime-response.interface';
import { Filter } from 'src/app/jikan/interfaces/top-anime-request';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styles: [],
})
export class RootPageComponent implements OnInit {
  public F = Filter;

  public pages = [1, 2, 3];
  public currentFilter = Filter.Airing;
  public animesChunks: Array<Anime[]> = [];

  public constructor(private jikanService: JikanService) {}

  public ngOnInit(): void {
    this.fetchAnimes();
  }

  public setCurrentFilter(filter: Filter) {
    this.currentFilter = filter;
    this.fetchAnimes();
  }

  public fetchAnimes(): void {
    console.log('FETCHING ANIMES IN PARALLEL');
    const observables = this.pages.map((page) => {
      return this.jikanService.getTopAnime({
        filter: this.currentFilter,
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
