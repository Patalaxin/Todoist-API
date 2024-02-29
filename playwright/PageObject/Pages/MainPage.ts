import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage{
    readonly page: Page;
    readonly getStartedLink: Locator
    readonly installationHeader: Locator

    constructor(page: Page){
        this.page = page
        this.getStartedLink = page.getByRole('link', { name: 'Get started' })
        this.installationHeader = page.getByRole('heading', { name: 'Installation' })
    }

    async goto(){
        await this.page.goto('/')
        await expect(this.getStartedLink).toBeVisible()
    }

    async gotoInstallation(){
        await this.getStartedLink.click()
        await expect(this.installationHeader).toBeVisible()
    }

}