import { VideoGameTrailersPage } from './app.po';

describe('Root', () => {
  let page: VideoGameTrailersPage;

  beforeEach(() => {
    page = new VideoGameTrailersPage();
  });

  it('should display the header text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Video Game Trailers');
  });
});
