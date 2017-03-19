import { FsAngular2Page } from './app.po';

describe('fs-angular2 App', () => {
  let page: FsAngular2Page;

  beforeEach(() => {
    page = new FsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
