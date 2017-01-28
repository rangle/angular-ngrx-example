import {Routes} from '@angular/router';

import {VideoGameListingPageComponent} from './components';

export const listingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: VideoGameListingPageComponent
  }
];


