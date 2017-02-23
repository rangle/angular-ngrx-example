import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
import {IVideoGame} from '../../../interfaces/video-game/video-game.interface';
import {VideoGameListingStore} from '../../../store/video-game-listing/video-game-listing.store';

@Component({
  selector: 'app-video-game-detail',
  templateUrl: './video-game-detail.component.html',
  styleUrls: ['./video-game-detail.component.scss']
})
export class VideoGameDetailComponent {

  @Input()
  public videoGame: IVideoGame;

  constructor(
    private location: Location,
    private videoGameListingStore: VideoGameListingStore
  ) { }

  public toggleFavorite() {
    this.videoGameListingStore.toggleFavorite(this.videoGame.id);
  }

  public goBack() {
    this.location.back();
  }

}
