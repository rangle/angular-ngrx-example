import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';

import {
  VideoGamesContainerComponent
} from './components';

import {PlatformsService, VideoGamesService} from './services';
import {VideoGameListingModule} from './listing/listing.module';
import {VideoGameDetailModule} from './detail/detail.module';
import {PlatformsEffects, VideoGameListingEffects} from '../video-games/store/effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VideoGameListingModule,
    VideoGameDetailModule,
    EffectsModule.run(PlatformsEffects),
    EffectsModule.run(VideoGameListingEffects),
  ],
  declarations: [
    VideoGamesContainerComponent
  ],
  providers: [
    PlatformsService,
    VideoGamesService
  ]
})
export class VideoGamesModule {

}
