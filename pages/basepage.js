import { expect } from '@playwright/test'
const base = require('../utils/basedata.json')

export class basepage {
    constructor(page) {
        this.page = page;
    }

    async enterurl() {
        await this.page.goto(base.headurl.url);

    }

    async closepage() {
        await this.page.close();

    }


}

