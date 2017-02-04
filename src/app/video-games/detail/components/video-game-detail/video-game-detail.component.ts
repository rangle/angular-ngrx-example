import {Component, Input} from '@angular/core';

import {IVideoGame} from '../../../../interfaces/video-game/video-game.interface';

@Component({
  selector: 'app-video-game-detail',
  templateUrl: './video-game-detail.component.html',
  styleUrls: ['./video-game-detail.component.scss']
})
export class VideoGameDetailComponent {

  @Input()
  public videoGame: IVideoGame;

}
