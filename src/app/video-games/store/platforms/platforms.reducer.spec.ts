import {createAction} from '../../../store/create-action';
import {platformsReducer} from './platforms.reducer';
import {PlatformsStore} from './platforms.store';
import {createDefaultPlatforms} from '../../interfaces/platforms/platforms.interface';

describe('platformsReducer(falsy, unknownAction)', () => {
  const unknownAction = createAction('UNKNOWN');

  it('returns the default state', () => {
    const platforms = platformsReducer(null, unknownAction);
    expect(platforms).toEqual(createDefaultPlatforms());
  });
});

describe('platformsReducer(platforms, retrieveAction)', () => {
  const platforms = {...createDefaultPlatforms(), loadingError: 'Error' };
  const retrieveAction = createAction(PlatformsStore.RETRIEVE);

  it('sets isLoading to true', () => {
    const newPlatforms = platformsReducer(platforms, retrieveAction);
    expect(newPlatforms.isLoading).toEqual(true);
  });

  it('clears out existing errors', () => {
    const newPlatforms = platformsReducer(platforms, retrieveAction);
    expect(newPlatforms.loadingError).toBeNull();
  });
});

describe('platformsReducer(platforms, retrieveSuccessAction)', () => {
  const platforms = {...createDefaultPlatforms(), isLoading: true};
  const retrieveSuccessAction = createAction(PlatformsStore.RETRIEVE_SUCCESS, {
    platforms: ['Nintendo Switch', 'PC']
  });

  it('set the platforms list', () => {
    const newPlatforms = platformsReducer(platforms, retrieveSuccessAction);
    expect(newPlatforms.list).toEqual(['Nintendo Switch', 'PC']);
  });

  it('should set isLoading to false', () => {
    const newPlatforms = platformsReducer(platforms, retrieveSuccessAction);
    expect(newPlatforms.isLoading).toEqual(false);
  });
});

describe('platformsReducer(platforms, retrieveErrorAction)', () => {
  const platforms = {...createDefaultPlatforms(), isLoading: true};
  const retrieveErrorAction = createAction(PlatformsStore.RETRIEVE_ERROR, {
    error: 'Error Message'
  });

  it('set the loading error', () => {
    const newPlatforms = platformsReducer(platforms, retrieveErrorAction);
    expect(newPlatforms.loadingError).toEqual('Error Message');
  });

  it('should set isLoading to false', () => {
    const newPlatforms = platformsReducer(platforms, retrieveErrorAction);
    expect(newPlatforms.isLoading).toEqual(false);
  });
});
