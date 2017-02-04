import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import {IVideoGame} from '../../../interfaces/video-game/video-game.interface';
import {VideoGameListingStore} from '../../../store/video-game-listing/video-game-listing.store';

@Component({
  selector: 'app-video-game-detail-page',
  templateUrl: './video-game-detail-page.component.html',
  styleUrls: ['./video-game-detail-page.component.scss']
})
export class VideoGameDetailPageComponent implements OnInit {

  public videoGame$: Observable<IVideoGame>;

  constructor(
    private route: ActivatedRoute,
    private videoGameListingStore: VideoGameListingStore
  ) {

  }

  public ngOnInit() {
    this.videoGame$ = this.route.params
      .switchMap((params: any) => this.videoGameListingStore.getVideoGame(params.videoGameId));
  }

}
