import {
  videoGameMatchesSearchQuery, IVideoGame,
  videoGameMatchesFilters
} from './videoGame.interface';
import {IVideoGameFilters} from '../videoGameListing/videoGameFilters.interface';

describe('with Super Mario Odyssey', () => {
  const superMarioOdyssey: IVideoGame = {
    id: '1',
    title: 'Super Mario Odyssey',
    description: 'description',
    platform: 'Nintendo Switch',
    youtubeUrl: 'youtube.com'
  };

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

  describe('videoGameMatchesSearchQuery(falsy, "Super")', () => {
    it('returns false', () => {
      const isMatched = videoGameMatchesSearchQuery(null, 'Super');
      expect(isMatched).toEqual(false);
    });
  });

  describe('videoGameMatchesFilters(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IVideoGameFilters = {
        platform: 'Nintendo Switch'
      };

      const isMatched = videoGameMatchesFilters(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('videoGameMatchesFilters(superMarioOdyssey, nintendoSwitch)', () => {
    it('returns true', () => {
      const nintendoSwitch: IVideoGameFilters = {
        platform: 'Nintendo Switch'
      };

      const isMatched = videoGameMatchesFilters(superMarioOdyssey, nintendoSwitch);
      expect(isMatched).toEqual(true);
    });
  });

  describe('videoGameMatchesFilters(superMarioOdyssey, pc)', () => {
    it('returns false', () => {
      const pc: IVideoGameFilters = {
        platform: 'PC'
      };

      const isMatched = videoGameMatchesFilters(superMarioOdyssey, pc);
      expect(isMatched).toEqual(false);
    });
  });

  describe('videoGameMatchesFilters(superMarioOdyssey, falsy)', () => {
    it('returns true', () => {
      const isMatched = videoGameMatchesFilters(superMarioOdyssey, null);
      expect(isMatched).toEqual(true);
    });
  });
});
