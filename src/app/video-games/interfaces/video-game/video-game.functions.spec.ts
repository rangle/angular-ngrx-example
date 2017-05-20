import { createDefaultVideoGameFilters, IVideoGameFilters } from '../video-game-listing';
import { IVideoGame } from './video-game.interface';
import {
  videoGameMatchesFavoritesFilter,
  videoGameMatchesPlatformFilter,
  videoGameMatchesSearchQuery
} from './video-game.functions';

describe('with Super Mario Odyssey', () => {
  let superMarioOdyssey: IVideoGame;

  beforeEach(() => {
    superMarioOdyssey = {
      id: '1',
      title: 'Super Mario Odyssey',
      description: 'description',
      platform: 'Nintendo Switch',
      youtubeUrl: 'youtube.com',
      favorite: false,
    };
  });

  describe('videoGameMatchesSearchQuery(superMarioOdyssey, "Super")', () => {
    it('returns true', () => {
      const isMatched = videoGameMatchesSearchQuery(superMarioOdyssey, 'Super');
      expect(isMatched).toEqual(true);
    });
  });

  describe('videoGameMatchesSearchQuery(superMarioOdyssey, "Zelda")', () => {
    it('returns false', () => {
      const isMatched = videoGameMatchesSearchQuery(superMarioOdyssey, 'Zelda');
      expect(isMatched).toEqual(false);
    });
  });

  describe('videoGameMatchesSearchQuery(superMarioOdyssey, "")', () => {
    it('returns true', () => {
      const isMatched = videoGameMatchesSearchQuery(superMarioOdyssey, '');
      expect(isMatched).toEqual(true);
    });
  });

  describe('videoGameMatchesSearchQuery(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = videoGameMatchesSearchQuery(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('videoGameMatchesPlatformFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IVideoGameFilters = {
        ...createDefaultVideoGameFilters(),
        platform: 'Nintendo Switch',
      };

      const isMatched = videoGameMatchesPlatformFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('videoGameMatchesPlatformFilter(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IVideoGameFilters = {
        ...createDefaultVideoGameFilters(),
        platform: 'Nintendo Switch',
      };

      const isMatched = videoGameMatchesPlatformFilter(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('videoGameMatchesPlatformFilter(superMarioOdyssey, pc)', () => {
    it('returns false', () => {
      const pc: IVideoGameFilters = {
        ...createDefaultVideoGameFilters(),
        platform: 'PC',
      };

      const isMatched = videoGameMatchesPlatformFilter(superMarioOdyssey, pc);
      expect(isMatched).toEqual(false);
    });
  });

  describe('videoGameMatchesPlatformFilter(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = videoGameMatchesPlatformFilter(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });

  describe('and it is favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: true };
    });

    describe('videoGameMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
      it('returns true', () => {
        const showFavorites: IVideoGameFilters = {
          ...createDefaultVideoGameFilters(),
          favorites: true,
        };

        const isMatched = videoGameMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
        expect(isMatched).toEqual(true);
      });
    });

    describe('videoGameMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
      it('returns true', () => {
        const showFavorites: IVideoGameFilters = {
          ...createDefaultVideoGameFilters(),
          favorites: false,
        };

        const isMatched = videoGameMatchesFavoritesFilter(superMarioOdyssey, showFavorites);
        expect(isMatched).toEqual(true);
      });
    });
  });

  describe('and it is not favourited', () => {
    beforeEach(() => {
      superMarioOdyssey = { ...superMarioOdyssey, favorite: false };
    });

    describe('videoGameMatchesFavoritesFilter(superMarioOdyssey, favorites:true)', () => {
      it('returns false', () => {
        const filters: IVideoGameFilters = {
          ...createDefaultVideoGameFilters(),
          favorites: true,
        };

        const isMatched = videoGameMatchesFavoritesFilter(superMarioOdyssey, filters);
        expect(isMatched).toEqual(false);
      });
    });

    describe('videoGameMatchesFavoritesFilter(superMarioOdyssey, favorites:false)', () => {
      it('returns true', () => {
        const filters: IVideoGameFilters = {
          ...createDefaultVideoGameFilters(),
          favorites: false,
        };

        const isMatched = videoGameMatchesFavoritesFilter(superMarioOdyssey, filters);
        expect(isMatched).toEqual(true);
      });
    });
  });
});

describe('when the game is falsy', () => {
  describe('videoGameMatchesSearchQuery(falsy, "Super")', () => {
    it('returns false', () => {
      const isMatched = videoGameMatchesSearchQuery(null, 'Super');
      expect(isMatched).toEqual(false);
    });
  });

  describe('videoGameMatchesPlatformFilter(falsy, "Nintendo Switch")', () => {
    const nintendoSwitch: IVideoGameFilters = {
      ...createDefaultVideoGameFilters(),
      platform: 'Nintendo Switch'
    };

    it('returns false', () => {
      const isMatched = videoGameMatchesPlatformFilter(null, nintendoSwitch);
      expect(isMatched).toEqual(false);
    });
  });
});
