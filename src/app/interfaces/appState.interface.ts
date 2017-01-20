import {IVideoGameListing} from './videoGameListing.interface';
import {IVideoGameDetail} from './videoGameDetail.interface';

export interface IAppState {
  readonly videoGameListing: IVideoGameListing;
  readonly videoGameDetail: IVideoGameDetail;
}