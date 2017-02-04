import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SharedComponentsModule} from '../../shared/components/shared-components.module';

import {
  VideoGameDetailComponent,
  VideoGameDetailPageComponent,
  YouTubeVideoComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ],
  declarations: [
    VideoGameDetailComponent,
    VideoGameDetailPageComponent,
    YouTubeVideoComponent
  ],
  providers: []
})
export class VideoGameDetailModule {

}
