import {Component} from '@angular/core';

import {VideoGameListingStore} from '../../../store/videoGameListing/videoGameListing.store';
import {PlatformsStore} from '../../../store/platforms/platforms.store';

@Component({
  selector: 'video-games-container',
  templateUrl: './video-games-container.component.html',
  styleUrls: ['./video-games-container.component.scss']
})
export class VideoGamesContainerComponent {

  constructor(
    private platformsStore: PlatformsStore,
    private videoGameListingStore: VideoGameListingStore
  ) {
    this.platformsStore.retrieve();
    this.videoGameListingStore.retrieve();
  }

}