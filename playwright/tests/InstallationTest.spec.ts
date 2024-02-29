const { test } = require('../PageObject/Utilities/MainPageFixture')

// import { MainPage } from '../PageObject/Pages/MainPage';

test('Test12', async ({ mainPage, page }) => {
  await mainPage.goto()
  await mainPage.gotoInstallation()
});