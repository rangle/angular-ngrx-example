import {IVideoGameListing} from './videoGameListing/videoGameListing.interface';
import {IVideoGameDetail} from './videoGameDetail/videoGameDetail.interface';

export interface IAppState {
  readonly videoGameListing: IVideoGameListing;
  readonly videoGameDetail: IVideoGameDetail;
}