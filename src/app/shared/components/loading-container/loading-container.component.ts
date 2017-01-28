import {Component, Input, OnChanges} from '@angular/core';

import {ILoadable} from '../../../interfaces/loadable/loadable';

@Component({
  selector: 'loading-container',
  templateUrl: 'loading-container.component.html',
  styleUrls: ['loading-container.component.scss']
})
export class LoadingContainerComponent implements OnChanges {

  @Input()
  private loadable: ILoadable;

  private isLoading; boolean;
  private isError: boolean;
  private isOkay: boolean;

  ngOnChanges() {
    this.isLoading = this.loadable.isLoading;
    this.isError = Boolean(this.loadable.loadingError);
    this.isOkay = !this.isLoading && !this.isError;
  }

}
