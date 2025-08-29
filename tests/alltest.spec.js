import{test, expect} from '@playwright/test';
import{basepage} from '../pages/basepage';
import { homepage } from '../pages/homepage';
import { phonespage } from '../pages/phonespage';
import { signuppage } from '../pages/signuppage';
const data = require('../utils/data.json')


 let context;
 let page;

test.beforeEach('startapp', async({browser}) =>{
    context = await browser.newContext();
    page = await context.newPage();
const base = new basepage(page);
 await base.enterurl(data.headurl.url)
})

test.afterEach('teardown', async() =>{
    await page.close();
})

test('homepage', async()=>{
    const home = new homepage(page);
   const url = await home.checkurl(); 
   await expect(await url).toBe(data.headurl.url);
   const title = await home.checktitle();
   await expect(await title).toBe(data.headtitle.title);
   const logofun = await home.logofun();
   await expect(logofun).toBeTruthy();
   await home.navbarfun();
   await home.categoriesfun();
   await home.productsfun();
   
   
})

test('phonespage',async()=>{
    const phones = new phonespage(page);
    await phones.clickphonefun();
    await phones.allmobilesfun();
    await phones.firstphonefun();
    const phoneimg = await phones.phoneimagefun();
    await expect(phoneimg).toBeVisible();
   const headtitle = await phones.phonetitlefun();
   await expect (headtitle).toBe("Samsung galaxy s6");
   async function cart(){
      page.on("dialog", async dialog => {
  await expect(dialog.message()).toContain("Product added");
  console.log(dialog.message())
  await dialog.accept(); 
 })
 await phones.addtocartfun();
   } 
   await cart();
 await phones.returnhomefun();
})

test('signuppage',async() =>{
    
const signup = new signuppage(page);
await signup.signupbuttonfun();
 await signup.checktitlefun();
await signup.checkusernamefun();
 await signup.checkpasswordfun();
await signup.signupdatafun();
await signup.signupbuttonfun();
await signup.verifysignupdatafun();
await signup.closepagefun();

})

