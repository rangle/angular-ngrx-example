import {
  IVideoGameListing,
  createDefaultVideoGameListing,
  getVideoGames, getVideoGame
} from './video-game-listing.interface';
import {createVideoGame} from '../video-game/video-game.interface';

describe('when there is a list of 3 unsorted video games', () => {
  const unsortedVideoGameListing: IVideoGameListing =
    Object.assign({}, createDefaultVideoGameListing(), {
      videoGames: [
        createVideoGame('1', 'Super Mario', false),
        createVideoGame('2', 'Legend of Zelda', true),
        createVideoGame('3', 'Metroid', false),
      ]
    });

  describe('getVideoGames(unsortedVideoGameListing)', () => {
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

  describe('getVideoGame(unsortedVideoGameListing, "1")', () => {
    it('should get the matched video game via its id', () => {
      const videoGame = getVideoGame(unsortedVideoGameListing, '1');
      expect(videoGame).toEqual(unsortedVideoGameListing.videoGames[0]);
    });
  });

  describe('getVideoGame(unsortedVideoGameListing, falsy)', () => {
    it('returns falsy', () => {
      const videoGame = getVideoGame(unsortedVideoGameListing, null);
      expect(videoGame).toBeFalsy();
    });
  });
});

describe('when there is a list of games from different platforms', () => {
  const videoGameListing: IVideoGameListing =
    Object.assign({}, createDefaultVideoGameListing(), {
      videoGames: [
        createVideoGame('1', 'Super Mario Odyssey', false, 'Nintendo Switch'),
        createVideoGame('2', 'Pillars of Eternity', false, 'PC')
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

describe('when there is a list of games from different platforms', () => {
  const videoGameListing: IVideoGameListing =
    Object.assign({}, createDefaultVideoGameListing(), {
      videoGames: [
        createVideoGame('1', 'Super Mario Odyssey', false, 'Nintendo Switch'),
        createVideoGame('2', 'Pillars of Eternity', false, 'PC')
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

describe('when there is a list of games with a search query', () => {
  const videoGameListing: IVideoGameListing =
    Object.assign({}, createDefaultVideoGameListing(), {
      videoGames: [
        createVideoGame('1', 'Super Mario Odyssey', false),
        createVideoGame('2', 'Pillars of Eternity', false)
      ],
      searchQuery: 'Sup'
    });

  it('should return a list that includes the searchQuery string', () => {
    const videoGames = getVideoGames(videoGameListing);
    expect(videoGames.length).toEqual(1);
    expect(videoGames[0].id).toEqual('1');
  });
});

describe('when the list is falsy', () => {
  describe('getVideoGame(falsy, "1")', () => {
    it('returns falsy', () => {
      const videoGame = getVideoGame(null, '1');
      expect(videoGame).toBeFalsy();
    });
  });

  describe('getVideoGames(falsy)', () => {
    it('returns an empty list', () => {
      const videoGame = getVideoGames(null);
      expect(videoGame).toEqual([]);
    });
  });
});
