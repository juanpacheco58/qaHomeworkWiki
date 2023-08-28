import { SpeccPage } from './SpeccPage';
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const sp = new SpeccPage(driver,'https://www.google.com')

test("it works", async () => {
  await sp.navigate();
  await sp.doSearch("purple");
  expect(await sp.getResults()).toContain("purple");
});

afterAll(async () => {
  await driver.quit();
});
