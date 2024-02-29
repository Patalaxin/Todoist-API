const base = require('@playwright/test');
import { MainPage } from "../Pages/MainPage";

exports.test = base.test.extend({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    }
});
exports.expect = base.expect;