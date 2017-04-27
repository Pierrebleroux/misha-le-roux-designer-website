import { MishaWebsitePortfolioPage } from './app.po';

describe('misha-website-portfolio App', () => {
  let page: MishaWebsitePortfolioPage;

  beforeEach(() => {
    page = new MishaWebsitePortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
