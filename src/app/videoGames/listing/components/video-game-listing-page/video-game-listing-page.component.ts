import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {VideoGameListingStore} from '../../../../store/videoGameListing/videoGameListing.store';
import {IVideoGameListing} from '../../../../interfaces/videoGameListing/videoGameListing.interface';

@Component({
  selector: 'video-game-listing-page',
  templateUrl: './video-game-listing-page.component.html',
  styleUrls: ['./video-game-listing-page.component.scss']
})
export class VideoGameListingPageComponent {

  videoGameListing$: Observable<IVideoGameListing>;

  constructor(private videoGameListingStore: VideoGameListingStore) {
    this.videoGameListing$ = videoGameListingStore.getVideoGameListing();
  }

}