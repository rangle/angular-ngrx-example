import {Input, Component} from '@angular/core';

import {IVideoGame} from '../../../../interfaces/videoGame/videoGame.interface';

@Component({
  selector: 'app-video-game-list-item',
  templateUrl: './video-game-list-item.component.html',
  styleUrls: ['./video-game-list-item.component.scss']
})
export class VideoGameListItemComponent {

  @Input()
  public videoGame: IVideoGame;

}
