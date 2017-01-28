import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'video-game-filter',
  templateUrl: './video-game-filter.component.html',
  styleUrls: ['./video-game-filter.component.scss']
})
export class VideoGameFilterComponent {

  @Input()
  private platforms: Array<string>;

  @Output()
  private filterChanged = new EventEmitter<string>();

}