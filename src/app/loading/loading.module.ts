import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
  LoadingContainerComponent,
  SpinnerComponent
} from './components/index';

const components = [
  LoadingContainerComponent,
  SpinnerComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class LoadingModule { }
