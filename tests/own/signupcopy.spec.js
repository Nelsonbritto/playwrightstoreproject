import{test,expect} from '@playwright/test'
const signupdata = require('../../utils/signupdata.json')


test('signuppage',async({page})=>{

await page.goto("https://demoblaze.com/index.html")

await page.click("#signin2"); //this.signupbutton
await expect(await page.locator("#signInModalLabel").textContent()).toBe(signupdata.title.head); //this.signuplabel
await expect(await page.locator("//label[@for='sign-username']").textContent()).toBe(signupdata.title.usernametitle); //this.usernamelabel
await expect(await page.locator("//label[@for='sign-password']").textContent()).toBe(signupdata.title.passwordtitle); //this.passwordlabel
await page.fill("#sign-username",signupdata.user1.username) //this.username
await page.fill("#sign-password",signupdata.user1.password) //this.password

    page.once('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('Sign up successful.');
        await dialog.accept();
    })
await page.click("//button[.='Sign up']"); //this.signupuser

await page.click("#signin2"); //this.signupbutton
await page.fill("#sign-username",''); //this.username
await page.fill("#sign-password",''); //this.password
await page.fill("#sign-username",signupdata.user1.username) //this.username
await page.fill("#sign-password",signupdata.user1.password) //this.password

  page.once('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toBe('This user already ');
        console.log(dialog.message());
        await dialog.accept();
    })
 await page.click("//button[.='Sign up']"); //this.signupuser
 await page.pause();

    await page.click("//button[.='Sign up']//parent::div//button[.='Close']"); //this.close
   
})