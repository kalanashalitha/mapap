import { MapapPage } from './app.po';

describe('mapap App', () => {
  let page: MapapPage;

  beforeEach(() => {
    page = new MapapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
