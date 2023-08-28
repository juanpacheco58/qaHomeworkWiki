import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
const chromedriver = require("chromedriver")

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
      header: By = By.css('.titleText')
      addEmployee: By = By.css('[name=addEmployee]')
      newEmployee: By = By.css('[name=employee11]')
      nameInput: By = By.css('[name=nameEntry]')
      titleInput: By = By.css('[name=titleEntry]')
      phoneInput: By = By.css('[name=phoneEntry]')
      saveBtn: By = By.xpath('//button[@id="saveBtn"]')
      constructor(driver: WebDriver){
          this.driver = driver
      }
      // Methods
          async navigate() {
            await this.driver.get(this.url)
            await this.driver.wait(until.elementLocated(this.header))
        }
    }
  
      const emmPage = new employeePage(driver)
  
    describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emmPage.navigate();
      })
      afterAll(async () => {
          await driver.quit()
      })
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emmPage.header))
          await driver.findElement(emmPage.addEmployee).click()
          await driver.findElement(emmPage.newEmployee).click()
          await driver.findElement(emmPage.nameInput).click()
          await driver.findElement(emmPage.nameInput).clear()
          await driver.findElement(emmPage.nameInput).sendKeys("Nick")
          await driver.findElement(emmPage.phoneInput).click()
          await driver.findElement(emmPage.phoneInput).clear()
          await driver.findElement(emmPage.phoneInput).sendKeys("1234567810")
          await driver.findElement(emmPage.titleInput).click()
          await driver.findElement(emmPage.titleInput).clear()
          await driver.findElement(emmPage.titleInput).sendKeys("Super Ceo")
 
      }) 
       })