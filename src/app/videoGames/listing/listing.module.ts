import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SharedComponentsModule} from '../../shared/components/sharedComponents.module';

import {
  VideoGameFilterComponent,
  VideoGameListingComponent,
  VideoGameListingPageComponent,
  VideoGameSearchComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ],
  declarations: [
    VideoGameFilterComponent,
    VideoGameListingComponent,
    VideoGameListingPageComponent,
    VideoGameSearchComponent
  ],
  providers: []
})
export class VideoGameListingModule {

}