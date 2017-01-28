import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {IVideoGame} from '../../../../interfaces/videoGame/videoGame.interface';
import {VideoGameListingStore} from '../../../../store/videoGameListing/videoGameListing.store';

@Component({
  selector: 'video-game-detail-page',
  templateUrl: './video-game-detail-page.component.html',
  styleUrls: ['./video-game-detail-page.component.scss']
})
export class VideoGameDetailPageComponent implements OnInit {

  private videoGame$: Observable<IVideoGame>;

  constructor(
    private route: ActivatedRoute,
    private videoGameListingStore: VideoGameListingStore
  ) {

  }

  ngOnInit() {
    this.videoGame$ = this.route.params
      .switchMap((params: any) => this.videoGameListingStore.getVideoGame(params.videoGameId));
  }

}