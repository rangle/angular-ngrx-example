import {Component, Output, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'video-game-search',
  templateUrl: 'video-game-search.component.html',
  styleUrls: ['video-game-search.component.scss']
})
export class VideoGameSearchComponent {

  @Output()
  private queryChanged = new EventEmitter<string>();

  private query$: Subject<string> = new Subject<string>();

  constructor() {
    this.query$
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(query => this.queryChanged.emit(query));
  }

  onChange(query: string) {
    this.query$.next(query);
  }

}