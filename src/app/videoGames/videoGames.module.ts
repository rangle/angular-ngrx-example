import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';

import {
  VideoGamesContainerComponent,
  VideoGamesFilterComponent,
  VideoGamesListingComponent,
  VideoGamesSearchComponent
} from './components';

import {VideoGamesService} from './services';

import {VideoGameListingStore} from './store/videoGameListing.store';
import {VideoGamesEffects} from './store/videoGames.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(VideoGamesEffects)
  ],
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