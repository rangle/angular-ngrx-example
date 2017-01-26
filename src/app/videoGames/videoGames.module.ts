import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  VideoGamesContainerComponent,
  VideoGamesFilterComponent,
  VideoGamesListingComponent,
  VideoGamesSearchComponent
} from './components';

import {VideoGamesService} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoGamesContainerComponent,
    VideoGamesFilterComponent,
    VideoGamesListingComponent,
    VideoGamesSearchComponent
  ],
  providers: [
    VideoGamesService
  ]
})
export class VideoGamesModule {

}