import {Component, Input} from '@angular/core';

import {IVideoGame} from '../../interfaces/videoGame.interface';

@Component({
  selector: 'video-games-listing',
  templateUrl: './video-games-listing.component.html',
  styleUrls: ['./video-games-listing.component.scss']
})
export class VideoGamesListingComponent {

  @Input()
  videoGames: Array<IVideoGame>;

}