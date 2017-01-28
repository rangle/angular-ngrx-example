import {Component, Input} from '@angular/core';

import {IVideoGame} from '../../../../interfaces/videoGame/videoGame.interface';

@Component({
  selector: 'video-game-listing',
  templateUrl: 'video-game-listing.component.html',
  styleUrls: ['video-game-listing.component.scss']
})
export class VideoGameListingComponent {

  @Input()
  videoGames: Array<IVideoGame>;

}