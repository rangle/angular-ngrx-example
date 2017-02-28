import { browser, element, by } from 'protractor';

export class VideoGameTrailersPage {

  public navigateTo() {
    return browser.get('/');
  }

  public getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

}
