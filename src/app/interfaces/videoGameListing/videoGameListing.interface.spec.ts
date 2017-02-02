import {
  IVideoGameListing,
  createDefaultVideoGameListing,
  getVideoGames
} from './videoGameListing.interface';
import {createVideoGame} from '../videoGame/videoGame.interface';

describe('getVideoGames()', () => {
  describe('a list of 3 unsorted video games', () => {
    const unsortedVideoGameListing: IVideoGameListing =
      Object.assign({}, createDefaultVideoGameListing(), {
        videoGames: [
          createVideoGame('1', 'Super Mario'),
          createVideoGame('2', 'Legend of Zelda'),
          createVideoGame('3', 'Metroid'),
        ]
      });

    it('returns a list of containing 3 elements', () => {
      const videoGames = getVideoGames(unsortedVideoGameListing);
      expect(videoGames.length).toEqual(3);
    });

    it('returns a list that is sorted by title', () => {
      const videoGames = getVideoGames(unsortedVideoGameListing);
      expect(videoGames[0].id).toEqual('2');
      expect(videoGames[1].id).toEqual('3');
      expect(videoGames[2].id).toEqual('1');
    });
  });

  describe('a list of games from different platforms', () => {
    const videoGameListing: IVideoGameListing =
      Object.assign({}, createDefaultVideoGameListing(), {
        videoGames: [
          createVideoGame('1', 'Super Mario Odyssey', 'Nintendo Switch'),
          createVideoGame('2', 'Pillars of Eternity', 'PC')
        ],
        filters: {
          platform: 'PC'
        }
      });

    it('should return a list that matches the specified platform only', () => {
      const videoGames = getVideoGames(videoGameListing);
      expect(videoGames.length).toEqual(1);
      expect(videoGames[0].id).toEqual('2');
    });
  });

  describe('a list of games from different platforms', () => {
    const videoGameListing: IVideoGameListing =
      Object.assign({}, createDefaultVideoGameListing(), {
        videoGames: [
          createVideoGame('1', 'Super Mario Odyssey', 'Nintendo Switch'),
          createVideoGame('2', 'Pillars of Eternity', 'PC')
        ],
        filters: {
          platform: 'PC'
        }
      });

    it('should return a list that matches the specified platform only', () => {
      const videoGames = getVideoGames(videoGameListing);
      expect(videoGames.length).toEqual(1);
      expect(videoGames[0].id).toEqual('2');
    });
  });

  describe('a list of games with a search query', () => {
    const videoGameListing: IVideoGameListing =
      Object.assign({}, createDefaultVideoGameListing(), {
        videoGames: [
          createVideoGame('1', 'Super Mario Odyssey'),
          createVideoGame('2', 'Pillars of Eternity')
        ],
        searchQuery: 'Sup'
      });

    it('should return a list that includes the searchQuery string', () => {
      const videoGames = getVideoGames(videoGameListing);
      expect(videoGames.length).toEqual(1);
      expect(videoGames[0].id).toEqual('1');
    });
  });
});
