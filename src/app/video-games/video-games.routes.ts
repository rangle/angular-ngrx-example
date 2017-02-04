import {Routes} from '@angular/router';

import {listingRoutes} from './listing/listing.routes';
import {detailRoutes} from './detail/detail.routes';
import {VideoGamesContainerComponent} from './components';

export const videoGamesRoutes: Routes = [
  {
    path: '',
    redirectTo: 'videoGames',
    pathMatch: 'full',
  },
  {
    path: 'videoGames',
    component: VideoGamesContainerComponent,
    children: [
      ...listingRoutes,
      ...detailRoutes
    ]
  }
];


