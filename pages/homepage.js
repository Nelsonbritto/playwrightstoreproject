export class homepage{

constructor(page){
    this.page = page;
    this.logo = "#nava img";
    this.navbar = "//ul[@class='navbar-nav ml-auto']//a";
    this.categories = ".list-group a";
    this.products = "#tbodyid h4 a";
}
   
async checkurl(){
    return await this.page.url();
    
}
    
async checktitle(){
   return await this.page.title();
}

async logofun(){
   return await (this.page.locator(this.logo));
}

async navbarfun(){
   const navbar = await this.page.$$(this.navbar);
   for(let x of navbar)
   {
    console.log(await x.textContent());
   }
}

async categoriesfun(){
   const categories = await this.page.$$(this.categories);
    for(let x of categories)
   {
    console.log(await x.textContent());
   }
}

async productsfun(){
    await this.page.waitForSelector(this.products)
   const products = await this.page.$$(this.products)
 for(let x of products)
   {
    console.log(await x.textContent());
   }

}
}