import {Input, Component} from '@angular/core';

import {IVideoGame} from '../../../interfaces/video-game/video-game.interface';
import {VideoGameListingStore} from '../../../store/video-game-listing/video-game-listing.store';

@Component({
  selector: 'app-video-game-list-item',
  templateUrl: './video-game-list-item.component.html',
  styleUrls: ['./video-game-list-item.component.scss']
})
export class VideoGameListItemComponent {

  @Input()
  public videoGame: IVideoGame;

  constructor(private videoGameListingStore: VideoGameListingStore) { }

  public toggleVideoGameFavorite() {
    this.videoGameListingStore.toggleFavorite(this.videoGame.id);
  }

}
