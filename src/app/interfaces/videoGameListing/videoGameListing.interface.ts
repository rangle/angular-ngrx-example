import {ILoadable} from '../loadable/loadable';
import {IVideoGame, matchesVideoGame} from '../videoGame/videoGame.interface';

export interface IVideoGameListing extends ILoadable {
  searchQuery: string;
  videoGames?: Array<IVideoGame>;
}

export function getFilteredVideoGames(videoGameListing: IVideoGameListing) {
  return Boolean(videoGameListing.searchQuery) ?
    videoGameListing.videoGames.filter(
      videoGame => matchesVideoGame(videoGame, videoGameListing.searchQuery)
    ) :
    videoGameListing.videoGames;
}

export function getVideoGame(videoGameListing: IVideoGameListing, id: string) {
  return videoGameListing.videoGames.find(videoGame => videoGame.id === id);
}