import { expect } from '@playwright/test'
export class phonespage {

  constructor(page) {
    this.page = page;
    this.phone = "//a[.='Phones']";
    this.allmobiles = "//h4[@class='card-title']//a";
    this.phoneimage = "#imgp img";
    this.pagetitle = "#tbodyid h2";
    this.addtocart = "//a[.='Add to cart']";
    this.homebutton = "//a[text()='Home ']";
  }
  async clickphonefun() {

    await this.page.click(this.phone);

  }
  async allmobilesfun() {
    await this.page.waitForSelector(this.allmobiles);
    const mobiles = await this.page.$$(this.allmobiles)
    for (let x of mobiles) {
      console.log(await x.textContent());
    }
    await this.page.waitForSelector(this.allmobiles);
    const firstmobile = await this.page.$$(this.allmobiles)
    await this.page.waitForTimeout(1000)
    await firstmobile[0].click();
  }
  async firstphonefun() {
    console.log(await this.page.url());
  }
  async phoneimagefun() {
    await this.page.waitForSelector(this.phoneimage);
    expect(await this.page.locator(this.phoneimage)).toBeVisible();
  }
  async phonetitlefun() {
    expect(await this.page.locator(this.pagetitle).textContent()).toBe("Samsung galaxy s6");

  }

  async addtocartfun() {
    await this.page.once('dialog', async dialog => {
      expect(dialog.type()).toContain('alert');
      expect(dialog.message()).toBe("Product added");
      await dialog.accept();
    })
    await this.page.click(this.addtocart);
    await this.page.waitForEvent('dialog');

  }
  async returnhomefun() {
    await this.page.goBack();
    await this.page.goBack();
    await this.page.click(this.homebutton);

  }

}