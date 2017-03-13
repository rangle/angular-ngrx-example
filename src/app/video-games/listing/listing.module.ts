import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LoadingModule} from '../../loading/loading.module';
import {
  CardComponent,
  CardsComponent,
  FavoriteToggleComponent,
  VideoGameFiltersComponent,
  VideoGameListingComponent,
  VideoGameListingPageComponent,
  VideoGameListItemComponent,
  VideoGameSearchComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule
  ],
  declarations: [
    CardComponent,
    CardsComponent,
    FavoriteToggleComponent,
    VideoGameFiltersComponent,
    VideoGameListingComponent,
    VideoGameListingPageComponent,
    VideoGameListItemComponent,
    VideoGameSearchComponent,
  ],
  providers: []
})
export class VideoGameListingModule {

}
