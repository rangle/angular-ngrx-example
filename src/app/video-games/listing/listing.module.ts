import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SharedComponentsModule} from '../../shared/components/shared-components.module';

import {
  VideoGameFilterComponent,
  VideoGameListingComponent,
  VideoGameListingPageComponent,
  VideoGameListItemComponent,
  VideoGameSearchComponent,
  CardsComponent,
  CardComponent
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
    VideoGameListItemComponent,
    VideoGameSearchComponent,
    CardsComponent,
    CardComponent
  ],
  providers: []
})
export class VideoGameListingModule {

}
