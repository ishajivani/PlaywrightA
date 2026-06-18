import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
 
setDefaultTimeout(30000);
 
let browser: Browser;
let context: BrowserContext;
export let page: Page;  
 
Before(async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();  
});
 
After(async () => {
  await page.close();
  await context.close();
  await browser.close();
});