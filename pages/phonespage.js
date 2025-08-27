export class phonespage{

    constructor(page){
        this.page = page;
        this.phone = "//a[.='Phones']";
        this.allmobiles = "//h4[@class='card-title']//a";
        this.phoneimage = "#imgp img";
        this.pagetitle = "#tbodyid h2";
        this.addtocart = "//a[.='Add to cart']";
        this.homebutton = "//a[text()='Home ']";
    }
async clickphonefun(){
  
  await this.page.click(this.phone);
  
}
async allmobilesfun(){
  await this.page.waitForSelector(this.allmobiles);
const mobiles =  await this.page.$$(this.allmobiles)
for(let x of mobiles)
{
  console.log(await x.textContent());
}
  await this.page.waitForSelector(this.allmobiles);
const firstmobile =  await this.page.$$(this.allmobiles)
await firstmobile[0].click();
}
async firstphonefun(){
console.log(await this.page.url());
}
async phoneimagefun(){
await this.page.waitForSelector(this.phoneimage);
return await this.page.locator(this.phoneimage);
}
async phonetitlefun(){
return await this.page.locator(this.pagetitle).textContent();

}

 async addtocartfun(){
  await this.page.click(this.addtocart);
 return this;
 }
 async returnhomefun(){
 await this.page.goBack();
  await this.page.goBack();
  await this.page.click(this.homebutton);

 }

}