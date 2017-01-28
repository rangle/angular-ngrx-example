import {Component, Input} from '@angular/core';

import {IVideoGame} from '../../../../interfaces/videoGame/videoGame.interface';

@Component({
  selector: 'video-game-detail',
  templateUrl: './video-game-detail.component.html',
  styleUrls: ['./video-game-detail.component.scss']
})
export class VideoGameDetailComponent {

  @Input()
  videoGame: IVideoGame;

  ngOnInit() {
    console.log(this.videoGame);
  }

}