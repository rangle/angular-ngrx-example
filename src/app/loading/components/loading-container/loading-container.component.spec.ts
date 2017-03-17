import { LoadingContainerComponent } from './loading-container.component';

describe('loading container (isolated)', () => {
  let loadingContainer: LoadingContainerComponent;
  beforeEach(() => {
    loadingContainer = new LoadingContainerComponent();
    loadingContainer.loadable = {
      isLoading: undefined,
      loadingError: undefined
    };
  });

  it('should show that it is loading', () => {
    loadingContainer.loadable.isLoading = true;
    loadingContainer.loadable.loadingError = false;
    loadingContainer.ngOnChanges();
    expect(loadingContainer.isLoading).toEqual(true);
  });

  it('should show that it is not loading', () => {
    loadingContainer.loadable.isLoading = false;
    loadingContainer.loadable.loadingError = false;
    loadingContainer.ngOnChanges();
    expect(loadingContainer.isLoading).toEqual(false);
  });

  it('is ok when there is no error and it is not loading', () => {
    loadingContainer.loadable.isLoading = false;
    loadingContainer.loadable.loadingError = false;
    loadingContainer.ngOnChanges();
    expect(loadingContainer.isOkay).toEqual(true);
  });

  it('is not ok when there is an error', () => {
    loadingContainer.loadable.loadingError = 'the error';
    loadingContainer.ngOnChanges();
    expect(loadingContainer.isOkay).toEqual(false);
  });

  it('is not ok when is loading', () => {
    loadingContainer.loadable.isLoading = true;
    loadingContainer.ngOnChanges();
    expect(loadingContainer.isOkay).toEqual(false);
  });
});
