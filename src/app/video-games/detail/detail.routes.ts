import {Routes} from '@angular/router';

import {VideoGameDetailPageComponent} from './components';

export const detailRoutes: Routes = [
  {
    path: ':videoGameId',
    component: VideoGameDetailPageComponent
  }
];


