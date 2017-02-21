import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-video-game-filter',
  templateUrl: './video-game-filter.component.html',
  styleUrls: ['./video-game-filter.component.scss']
})
export class VideoGameFilterComponent {

  @Input()
  public platforms: Array<string>;

  @Output()
  public platformFilterChanged = new EventEmitter<string>();

  @Output()
  public favoritesFilterChanged = new EventEmitter<boolean>();

}
