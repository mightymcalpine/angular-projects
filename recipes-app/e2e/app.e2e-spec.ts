import { GoodRecipesPage } from './app.po';

describe('good-recipes App', () => {
  let page: GoodRecipesPage;

  beforeEach(() => {
    page = new GoodRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
