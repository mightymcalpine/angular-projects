import { CompDataBindingPage } from './app.po';

describe('comp-data-binding App', () => {
  let page: CompDataBindingPage;

  beforeEach(() => {
    page = new CompDataBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
