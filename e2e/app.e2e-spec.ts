import { PaperclipFactoryPage } from './app.po';

describe('paperclip-factory App', function() {
  let page: PaperclipFactoryPage;

  beforeEach(() => {
    page = new PaperclipFactoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
