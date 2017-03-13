import {Component, Input, OnChanges} from '@angular/core';

import {ILoadable} from '../../interfaces/loadable/loadable';

@Component({
  selector: 'app-loading-container',
  templateUrl: 'loading-container.component.html',
  styleUrls: ['loading-container.component.scss']
})
export class LoadingContainerComponent implements OnChanges {

  @Input()
  public loadable: ILoadable;

  public isLoading: boolean;
  public isError: boolean;
  public isOkay: boolean;

  public ngOnChanges() {
    this.isLoading = this.loadable.isLoading;
    this.isError = Boolean(this.loadable.loadingError);
    this.isOkay = !this.isLoading && !this.isError;
  }

}
