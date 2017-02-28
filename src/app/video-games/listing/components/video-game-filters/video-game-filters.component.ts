import {Component, Input, Output, EventEmitter} from '@angular/core';

import {IVideoGameFilters} from '../../../interfaces/video-game-listing/video-game-filters.interface';

@Component({
  selector: 'app-video-game-filters',
  templateUrl: './video-game-filters.component.html',
  styleUrls: ['./video-game-filters.component.scss']
})
export class VideoGameFiltersComponent {

  @Input()
  public filters: IVideoGameFilters;

  @Input()
  public platforms: Array<string>;

  @Output()
  public platformFilterChanged = new EventEmitter<string>();

  @Output()
  public favoritesFilterChanged = new EventEmitter<boolean>();

}
