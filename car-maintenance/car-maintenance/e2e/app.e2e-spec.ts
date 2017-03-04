import { CarMaintenancePage } from './app.po';

describe('car-maintenance App', () => {
  let page: CarMaintenancePage;

  beforeEach(() => {
    page = new CarMaintenancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
