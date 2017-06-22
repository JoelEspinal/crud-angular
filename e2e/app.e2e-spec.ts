import { ContactsCrudPage } from './app.po';

describe('contacts-crud App', () => {
  let page: ContactsCrudPage;

  beforeEach(() => {
    page = new ContactsCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
