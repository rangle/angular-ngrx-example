import {NgModule} from '@angular/core';

import {
  VideoGamesContainerComponent,
  VideoGamesFilterComponent,
  VideoGamesListingComponent,
  VideoGamesSearchComponent
} from './components';

import {VideoGamesService} from './services';

import {VideoGameListingStore} from './store/videoGames.store';

@NgModule({
  imports: [],
  declarations: [
    VideoGamesContainerComponent,
    VideoGamesFilterComponent,
    VideoGamesListingComponent,
    VideoGamesSearchComponent
  ],
  providers: [
    VideoGamesService,
    VideoGameListingStore
  ]
})
export class VideoGamesModule {

}