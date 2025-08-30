import { test, expect } from '@playwright/test';
import { basepage } from '../pages/basepage';
import { homepage } from '../pages/homepage';
import { phonespage } from '../pages/phonespage';
import { signuppage } from '../pages/signuppage';

let context;
let page;
let verifyrandomuser;

function generateRandomUsername() {
    const randomNum = Math.floor(Math.random() * 100000); // 0–99999
    return `user${randomNum}`;
}
const randomusername = generateRandomUsername();
verifyrandomuser = randomusername;

test.beforeEach('startapp', async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    const base = new basepage(page);
    await base.enterurl()
})

test.afterEach('teardown', async () => {
    await page.close();
})

test('homepage', async () => {

    const home = new homepage(page);
    await home.checkurl();
    await home.checktitle();
    await home.logofun();
    await home.navbarfun();
    await home.categoriesfun();
    await home.productsfun();
})

test('phonespage', async () => {

    const phones = new phonespage(page);
    await phones.clickphonefun();
    await phones.allmobilesfun();
    await phones.firstphonefun();
    await phones.phoneimagefun();
    await phones.phonetitlefun();
    await phones.addtocartfun();
    await phones.returnhomefun();
})

test('signuppage', async () => {

    const signup = new signuppage(page);
    await signup.signupbuttonfun();
    await signup.checktitlefun();
    await signup.checkusernamefun();
    await signup.checkpasswordfun();
    await signup.signupdatafun(randomusername);
    await signup.signupbuttonfun();
    await signup.verifysignupdatafun(verifyrandomuser);
    await signup.closepagefun();
})

