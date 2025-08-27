import{test,expect} from '@playwright/test'
test('currentpage',async({page})=>{

await page.goto("https://demoblaze.com/index.html")
//await page.pause()
await page.locator("//a[.='Phones']").click()
//await page.pause()
await page.waitForSelector("#tbodyid h4 a", {state: 'visible'})
const mobiles =  await page.locator("#tbodyid h4 a")
console.log(mobiles.count())

//await page.pause()
for(let i=0; i<mobiles; i++)
{
  console.log(mobiles.nth(i).textContent());
  
}


await mobiles.nth(0).click();
})