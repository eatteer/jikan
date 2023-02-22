import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TopAnimeResponse } from '../interfaces/top-anime-response.interface';
import { Filter } from '../interfaces/top-anime-request';

interface GetTopAnimeParams {
  filter?: Filter;
  page?: number;
  limit?: number;
}

@Injectable({
  providedIn: 'root',
})
export class JikanService {
  public resultsLimit = 10;

  public constructor(private httpClient: HttpClient) {}

  public getTopAnime({
    filter,
    page = 1,
    limit = this.resultsLimit,
  }: GetTopAnimeParams): Observable<TopAnimeResponse> {
    // Setup always params
    let params = new HttpParams()
      .set('limit', this.resultsLimit)
      .set('page', page)
      .set('limit', limit);

    // Setup conditional params
    if (filter) params = params.set('filter', filter);

    // Return observable
    const endpoint = `${environment.jikanApiBaseUrl}/top/anime`;
    return this.httpClient.get<TopAnimeResponse>(endpoint, {
      params: params,
    });
  }
}
