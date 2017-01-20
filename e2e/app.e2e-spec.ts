import { PortweatherPage } from './app.po';

describe('portweather App', function() {
  let page: PortweatherPage;

  beforeEach(() => {
    page = new PortweatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
