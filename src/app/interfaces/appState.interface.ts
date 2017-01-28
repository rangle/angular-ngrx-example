import {IVideoGameListing} from './videoGameListing/videoGameListing.interface';
import {IVideoGameDetail} from './videoGameDetail/videoGameDetail.interface';
import {IPlatforms} from './platforms/platforms.interface';

export interface IAppState {
  readonly platforms: IPlatforms;
  readonly videoGameListing: IVideoGameListing;
  readonly videoGameDetail: IVideoGameDetail;
}