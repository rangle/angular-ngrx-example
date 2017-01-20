import { Angular2NgrxExamplePage } from './app.po';

describe('angular2-ngrx-example App', function() {
  let page: Angular2NgrxExamplePage;

  beforeEach(() => {
    page = new Angular2NgrxExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
