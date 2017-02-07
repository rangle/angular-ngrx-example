import {Component, Input} from '@angular/core';

import {IVideoGame} from '../../../interfaces/video-game/video-game.interface';

@Component({
  selector: 'app-video-game-listing',
  templateUrl: 'video-game-listing.component.html',
  styleUrls: ['video-game-listing.component.scss']
})
export class VideoGameListingComponent {

  @Input()
  public videoGames: Array<IVideoGame>;

}
