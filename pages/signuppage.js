import { expect } from '@playwright/test';
const signupdata = require('../utils/signupdata.json')

export class signuppage {
    constructor(page) {
        this.page = page;
        this.signupbutton = "#signin2"
        this.signuplabel = "#signInModalLabel"
        this.usernamelabel = "//label[@for='sign-username']"
        this.passwordlabel = "//label[@for='sign-password']"
        this.username = "#sign-username"
        this.password = "#sign-password"
        this.signupuser = "//button[.='Sign up']"
        this.close = "//button[.='Sign up']//parent::div//button[.='Close']"
    }

    async signupbuttonfun() {
        await this.page.waitForSelector(this.signupbutton)
        await this.page.click(this.signupbutton);
    }

    async checktitlefun() {
        const title = await this.page.locator(this.signuplabel).textContent()
        await expect(await title).toBe(signupdata.title.head)
    }

    async checkusernamefun() {
        const username = await this.page.locator(this.usernamelabel).textContent();
        await expect(await username).toBe(signupdata.title.usernametitle)
    }

    async checkpasswordfun() {
       const password = await this.page.locator(this.passwordlabel).textContent();
       await expect(await password).toBe(signupdata.title.passwordtitle)
    }

    async signupdatafun() {
        await this.page.fill(this.username, signupdata.user1.username)
        await this.page.fill(this.password, signupdata.user1.password)
        await this.page.once('dialog', async dialog => {
            await expect(dialog.type()).toContain('alert');
            await expect(dialog.message()).toBe('Sign up successful.');
            await dialog.accept();
        })
        await this.page.click(this.signupuser);
    }

    async verifysignupdatafun() {
        await this.page.fill(this.username, '');
        await this.page.fill(this.password, '');
        await this.page.fill(this.username, signupdata.user1.username)
        await this.page.fill(this.password, signupdata.user1.password)

        await this.page.once('dialog', async dialog => {
            await expect(dialog.type()).toContain('alert');
            await expect(dialog.message()).toBe('This user already exist.');
            await dialog.accept();
        });
        await this.page.click(this.signupuser);
        await this.page.waitForEvent('dialog');
    }

    async closepagefun() {
        await this.page.click(this.close);
    }
}