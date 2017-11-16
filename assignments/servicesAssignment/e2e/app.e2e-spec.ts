import { ServicesAssignmentPage } from './app.po';

describe('services-assignment App', () => {
  let page: ServicesAssignmentPage;

  beforeEach(() => {
    page = new ServicesAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
