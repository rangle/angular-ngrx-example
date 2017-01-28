import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {VideoGameDetailStore} from '../../../../store/videoGameDetail/videoGameDetail.store';
import {IVideoGame} from '../../../../interfaces/videoGame/videoGame.interface';
import {IVideoGameListing} from '../../../../interfaces/videoGameListing/videoGameListing.interface';
import {VideoGameListingStore} from '../../../../store/videoGameListing/videoGameListing.store';

@Component({
  selector: 'video-game-detail-page',
  templateUrl: './video-game-detail-page.component.html',
  styleUrls: ['./video-game-detail-page.component.scss']
})
export class VideoGameDetailPageComponent implements OnInit {

  private videoGameListing$: Observable<IVideoGameListing>;
  private videoGame$: Observable<IVideoGame>;

  constructor(
    private route: ActivatedRoute,
    videoGameListingStore: VideoGameListingStore,
    private videoGameDetailStore: VideoGameDetailStore
  ) {
    this.videoGameListing$ = videoGameListingStore.getVideoGameListing();
  }

  ngOnInit() {
    this.route.params.switchMap((params: any) => {
      console.log('how many times is this getting called');
      return this.videoGame$ = this.videoGameDetailStore.getVideoGame(params.videoGameId);
    });
  }

}