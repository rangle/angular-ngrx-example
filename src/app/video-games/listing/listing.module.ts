import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SharedComponentsModule} from '../../shared/components/shared-components.module';

import {
  VideoGameFiltersComponent,
  VideoGameListingComponent,
  VideoGameListingPageComponent,
  VideoGameListItemComponent,
  VideoGameSearchComponent,
  CardsComponent,
  CardComponent
} from './components';
import { FavoriteToggleComponent } from './components/favorite-toggle/favorite-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ],
  declarations: [
    VideoGameFiltersComponent,
    VideoGameListingComponent,
    VideoGameListingPageComponent,
    VideoGameListItemComponent,
    VideoGameSearchComponent,
    CardsComponent,
    CardComponent,
    FavoriteToggleComponent
  ],
  providers: []
})
export class VideoGameListingModule {

}
