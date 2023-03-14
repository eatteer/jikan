import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import {
  DetailAnimeResponse,
  Filter,
  SearchAnimeResponse,
  TopAnimeResponse,
  ReviewsAnimeResponse,
  RecommendationsAnimeResponse,
} from '../interfaces/jikan.interface';

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

  public getByQuery(query: string): Observable<SearchAnimeResponse> {
    const params = new HttpParams().set('q', query);
    const endpoint = `${environment.jikanApiBaseUrl}/anime`;
    return this.httpClient.get<SearchAnimeResponse>(endpoint, { params });
  }

  public getById(id: string): Observable<DetailAnimeResponse> {
    const endpoint = `${environment.jikanApiBaseUrl}/anime/${id}`;
    return this.httpClient.get<DetailAnimeResponse>(endpoint);
  }

  public getAnimeReviews(id: string): Observable<ReviewsAnimeResponse> {
    const endpoint = `${environment.jikanApiBaseUrl}/anime/${id}/reviews`;
    return this.httpClient.get<ReviewsAnimeResponse>(endpoint);
  }

  public getAnimeRecommendations(
    id: string
  ): Observable<RecommendationsAnimeResponse> {
    const endpoint = `${environment.jikanApiBaseUrl}/anime/${id}/recommendations`;
    return this.httpClient.get<RecommendationsAnimeResponse>(endpoint);
  }
}
