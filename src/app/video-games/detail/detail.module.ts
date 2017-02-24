import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SharedComponentsModule} from '../../shared/components/shared-components.module';

import {
  VideoGameDetailComponent,
  VideoGameDetailPageComponent,
  YouTubeVideoComponent,
  ButtonGroupComponent,
  ButtonComponent,
  ButtonToggleComponent
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
    YouTubeVideoComponent,
    ButtonGroupComponent,
    ButtonComponent,
    ButtonToggleComponent
  ],
  providers: []
})
export class VideoGameDetailModule {

}
