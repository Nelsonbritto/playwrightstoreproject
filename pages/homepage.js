import { expect } from '@playwright/test'
const base = require('../utils/basedata.json')

export class homepage {

    constructor(page) {
        this.page = page;
        this.logo = "#nava img";
        this.navbar = "//ul[@class='navbar-nav ml-auto']//a";
        this.categories = ".list-group a";
        this.products = "#tbodyid h4 a";
    }

    async checkurl() {
        expect(await this.page.url()).toBe(base.headurl.url);

    }

    async checktitle() {
        expect(await this.page.title()).toBe(base.headtitle.title);
    }

    async logofun() {
        expect(await this.page.locator(this.logo)).toBeVisible();
    }

    async navbarfun() {
        const navbar = await this.page.$$(this.navbar);
        for (let x of navbar) {
            console.log(await x.textContent());
        }
    }

    async categoriesfun() {
        const categories = await this.page.$$(this.categories);
        for (let x of categories) {
            console.log(await x.textContent());
        }
    }

    async productsfun() {
        await this.page.waitForSelector(this.products)
        const products = await this.page.$$(this.products)
        for (let x of products) {
            console.log(await x.textContent());
        }

    }
}