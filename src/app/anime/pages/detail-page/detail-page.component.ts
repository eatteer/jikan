import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/jikan/interfaces/jikan.interace';
import { JikanService } from '../../../jikan/services/jikan.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [],
})
export class DetailPageComponent {
  public anime?: Anime;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jikanService: JikanService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (!params.has('id')) {
        this.router.navigate(['/']);
        return;
      }
      const id = params.get('id')!;
      this.jikanService.getById(id).subscribe((detailAnimeResponse) => {
        this.anime = detailAnimeResponse.data;
      });
    });
  }
}
