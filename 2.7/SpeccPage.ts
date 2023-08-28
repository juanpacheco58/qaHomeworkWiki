import {By, until, WebDriver, WebElement} from 'selenium-webdriver';


export class SpeccPage {
    driver: WebDriver;
    url: string = 'https://www.google.com';
    searchBar: By = By.name('q');
    results: By = By.id('rcnt');
    constructor(driver: WebDriver, url: string) {
        this.driver = driver;
      
    }
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.searchBar))
    }

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    async sendKeys(elementBy: By, keys: any) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys)
    }
    async doSearch(text: string) {
        return this.setInput(this.searchBar, `${text}\n`)
    }
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
    async getResults() {
        return this.getText(this.results)
    }
}