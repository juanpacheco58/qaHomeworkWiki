import {Builder, until, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.xpath('//input[@name="hdrInput"]')
    const mkeInput: By = By.xpath('//input[@name="mkeInput"]')
    const oaiInput: By = By.xpath('//input[@name="oriInput"]')
    const nameInput: By = By.xpath('//input[@name="namInput"]')
    const clrBtn: By = By.xpath('//button[@id="clearBtn"]')
    const submitBtn: By = By.xpath('//button[@id="saveBtn"]')
    const errorMsg: By = By.xpath('//p[@alt="is"]')

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Hello World");
        await driver.findElement(mkeInput).sendKeys("Hi");
        await driver.findElement(oaiInput).sendKeys("LOL");
        await driver.findElement(nameInput).sendKeys("Nick Mullen");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(errorMsg));
        expect(await (await driver.findElement(errorMsg)).getText()).toBe(
            "Errors Received:");
        //expect(errorMsg).toContain("Errors Received:");
        await driver.findElement(clrBtn).click();
        await driver.sleep(200);

    })
})
