import {Component} from '@angular/core';

import {VideoGameListingStore} from '../../../store/videoGameListing/videoGameListing.store';

@Component({
  selector: 'video-games-container',
  templateUrl: './video-games-container.component.html',
  styleUrls: ['./video-games-container.component.scss']
})
export class VideoGamesContainerComponent {

  constructor(private videoGameListingStore: VideoGameListingStore) {
    this.videoGameListingStore.retrieve();
  }

}