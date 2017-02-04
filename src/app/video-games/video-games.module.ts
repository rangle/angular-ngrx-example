import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
  VideoGamesContainerComponent
} from './components';

import {PlatformsService, VideoGamesService} from './services';
import {VideoGameListingModule} from './listing/listing.module';
import {VideoGameDetailModule} from './detail/detail.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VideoGameListingModule,
    VideoGameDetailModule
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
